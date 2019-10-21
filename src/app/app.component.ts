import { Component, ViewChild } from '@angular/core';
import { DijkstraService } from './service/dijkstra.service';
import { Vertex, NodeVertex } from './classes/algoclasses';
import { GraphService } from './service/graph.service';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';
import { ToastService } from './service/toast.service';
import { NgbdToastGlobalComponent } from './ngbd-toast-global/ngbd-toast-global.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // nodeArray: NodeVertex[] = [];
  // nodeNames = [];
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
  // addNode(vertexName: string) {
  //   if (this.nodeNames.indexOf(vertexName) > -1) {
  //   const vertex = { nameOfVertex: vertexName, weight: 1 };
  //   this.nodeArray.push(vertex);
  //   this.nodeNames.push(vertexName);
  //   }
  // }
  // onfindShortestRoute() {
  //   const nodes = this.nodeNames.length - 1;
  // }

  //Graph use 
  // addVertex( firstNode: string , secondNode: string , distance: number ) {
  //   if (this.vertexArray.findIndex( obj => obj.name === firstNode) && this.vertexArray.findIndex( obj => obj.name === secondNode)) {
  //     let firstNodeObj = this.vertexArray.find( i => i.name === firstNode);
  //     // const firstNodeIndex = this.vertexArray.indexOf(firstNodeObj);
  //     let intersectionNode = firstNodeObj.nodes.find( i => i.nameOfVertex === secondNode);
  //     // let intersectionNodeIndex =  firstNodeObj.nodes.indexOf(intersectionNode);
  //     let updatedIntersectionNode = this.updatedNode(intersectionNode, distance);
  //     firstNodeObj.nodes.map(obj => firstNodeObj.nodes.find( i => i.nameOfVertex === secondNode) || updatedIntersectionNode);
  //     this.vertexArray.map(obj => this.vertexArray.find( i => i.name === firstNode) || firstNodeObj);
  //     let secondNodeObj = this.vertexArray.find( i => i.name === firstNode);
  //     intersectionNode = secondNodeObj.nodes.find( i => i.nameOfVertex === firstNode);
  //     updatedIntersectionNode = this.updatedNode(intersectionNode, distance);
  //     secondNodeObj.nodes.map(obj => firstNodeObj.nodes.find( i => i.nameOfVertex === secondNode) || updatedIntersectionNode);
  //     this.vertexArray.map(obj => this.vertexArray.find( i => i.name === firstNode) || secondNodeObj);
  //     // intersectionNode = '';
  //   } else {
  //     if ( this.vertexArray.findIndex( obj => obj.name === firstNode)) {
  //       // push first node obj to array
  //       const node = this.nodeArray.find(obj => obj.nameOfVertex === firstNode);
  //       this.vertexArray.push(new Vertex(firstNode, [], 1 ));
  //     }
  //     if ( this.vertexArray.findIndex( obj => obj.name === secondNode)) {
  //       // push node obj to array
  //       const node = this.nodeArray.find(obj => obj.nameOfVertex === secondNode);
  //       this.vertexArray.push(new Vertex(secondNode, [], 1 ));
  //     }
  //   }
  // }
  // updatedNode( node: NodeVertex, distance: number) {
  //   return node.weight = distance;
  // }


  constructor( private dijkstra: DijkstraService ,private graphService: GraphService ,private toast: ToastService) {
   this.graphService.getVertices().subscribe(res => {
       this.tempArray = Array.of(res);//json obj to array
       console.log('res',this.tempArray); 
       this.tempArray[0].forEach((index) => {

         index.nodes.forEach( (i,j) => {// i=elemet(active value) j=index
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
   );
    // console.log( this.graphService.getAll());
    //console.log('shortest' + this.dijkstra.findShortestWay('A', 'F'));
    // dijkstra.addVertex(new Vertex('A', [{ nameOfVertex: 'C', weight: 3 }, { nameOfVertex: 'E', weight: 7 }, { nameOfVertex: 'B', weight: 4 }], 1));
    // dijkstra.addVertex(new Vertex('B', [{ nameOfVertex: 'A', weight: 4 }, { nameOfVertex: 'C', weight: 6 }, { nameOfVertex: 'D', weight: 5 }], 1));
    // dijkstra.addVertex(new Vertex('C', [{ nameOfVertex: 'A', weight: 3 }, { nameOfVertex: 'B', weight: 6 }, { nameOfVertex: 'E', weight: 8 }, { nameOfVertex: 'D', weight: 11 }], 1));
    // dijkstra.addVertex(new Vertex('D', [{ nameOfVertex: 'B', weight: 5 }, { nameOfVertex: 'C', weight: 11 }, { nameOfVertex: 'E', weight: 2 }, { nameOfVertex: 'F', weight: 2 }], 1));
    // dijkstra.addVertex(new Vertex('E', [{ nameOfVertex: 'A', weight: 7 }, { nameOfVertex: 'C', weight: 8 }, { nameOfVertex: 'D', weight: 2 }, { nameOfVertex: 'G', weight: 5 }], 1));
    // dijkstra.addVertex(new Vertex('F', [{ nameOfVertex: 'D', weight: 2 }, { nameOfVertex: 'G', weight: 3 }], 1));
    // dijkstra.addVertex(new Vertex('G', [{ nameOfVertex: 'D', weight: 10 }, { nameOfVertex: 'E', weight: 5 }, { nameOfVertex: 'F', weight: 3 }], 1));
    // console.log(dijkstra.findShortestWay('A', 'F'));
  }
  // private showLoader(): boolean {
  //   console.log('Show loader');
  //   this.show = true;
  //   return this.show;
  // }
  // private hideLoader(): boolean {
  // console.log('Hide loader');
  // this.show = false;
  // return this.show;
  // }
  // getVertices() {
  //   this.vertexArray = this.dijkstra.vertices;
  //   this.vertexArray.filter(function(obj){
  //     return obj.name !== this.homePlanet;
  //   });
  // }
  onChange(selectedval) {
    console.log(selectedval);
    this.destination = selectedval;
}

  findShortestPath(dangerTpl) {
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
     // console.log()
      this.toast.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
     // window.alert("only one destination");
    }
  }



}