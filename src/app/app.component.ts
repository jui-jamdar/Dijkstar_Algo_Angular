import { Component, ViewChild } from '@angular/core';
import { DijkstraService } from './services/dijkstra.service';
import { Vertex, NodeVertex } from './models/algoclasses';
import { GraphService } from './services/graph.service';
import { NgbdModalBasicComponent } from './components/ngbd-modal-basic/ngbd-modal-basic.component';
import { ToastService } from './services/toast.service';
import { NgbdToastGlobalComponent } from './components/ngbd-toast-global/ngbd-toast-global.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vertexArray: Vertex[] = [];
  show = true;
  homePlanet = 'A';
  tempArray = [];
  nodeVertexArray: NodeVertex[] = [];
  destination = '';
  result = [];
  time;
  lastelement;
  @ViewChild(NgbdModalBasicComponent, {static: false}) child: NgbdModalBasicComponent;
  

  constructor( private dijkstra: DijkstraService ,private graphService: GraphService ,private toast: ToastService) {
   this.graphService.getVertices().subscribe(res => {
       this.tempArray = Array.of(res);//json obj to array
       console.log('res',this.tempArray); 
       this.tempArray[0].forEach((index) => {

         index.nodes.forEach( (i,j) => {
           const tnodeVertex = new NodeVertex();
           tnodeVertex.nameOfVertex = i.nameOfVertex;
           tnodeVertex.weight = i.weight.toFixed(2);
           this.nodeVertexArray.push(tnodeVertex);
         }
         );
         const tempObj = new Vertex(index.name, this.nodeVertexArray, index.weight.toFixed(2));
         this.vertexArray.push(tempObj);
         this.dijkstra.addVertex(tempObj);//algo 
         console.log('TempObj',tempObj)
         this.nodeVertexArray = [];
         this.vertexArray = this.vertexArray.filter(obj => obj.name !== this.homePlanet);
         this.show = false;
       });
     }
   );}
  onChange(selectedval) {
    console.log(selectedval);
    this.destination = selectedval;
}

  findShortestPath(dangerTpl,empty) {
    try {
      this.tempArray = this.dijkstra.findShortestWay('A', this.destination);
      console.log('temparray',this.tempArray)
      this.time = this.tempArray[this.tempArray.length - 1];//pop finalweight
      this.tempArray.pop();
      this.lastelement = this.tempArray[this.tempArray.length - 1];
      this.tempArray.pop();
      this.result = this.tempArray;
      this.tempArray = [];
      this.child.openModel();
    } catch (e) {
      if(dangerTpl.nodeIndex===13){
        this.toast.show(dangerTpl, { classname: 'bg-danger text-light', delay: 10000 });
      }else {
        this.toast.show(empty, { classname: 'bg-danger text-light', delay: 3000 });
      }
    }
  }
}
