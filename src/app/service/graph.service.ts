import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DijkstraService } from './dijkstra.service';
import { Vertex, NodeVertex } from '../classes/algoclasses';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient, private dijkstraAlgo: DijkstraService) { }

  url = 'http://localhost:3000/verticesArray';// JSon server url
  tempArray = [];
  vertexArray: Vertex[] = [];
  nodeVertexArray: NodeVertex[] = [];
  getVertices() {
    return this.http.get(this.url).pipe(res => {//Observable /behavioral subj can be used
      console.log('service called');
      return res;
    });

  }
  // getAll() {
  //   return this.http.get(this.url).subscribe(result => {
  //     try {
  //       // result.json();
  //       this.tempArray = Array.of(result);
  //       this.tempArray[0].forEach( (index) => {
  //         console.log("item" + index);

  //         index.nodes.forEach( (i,j) => {
  //           const tnodeVertex = new NodeVertex();
  //           tnodeVertex.nameOfVertex = i.nameOfVertex;
  //           tnodeVertex.weight = i.weight;
  //           this.nodeVertexArray.push(tnodeVertex);
  //         }
  //         );
  //         const tempObj = new Vertex(index.name, this.nodeVertexArray, index.weight);
  //         this.dijkstraAlgo.addVertex(tempObj);
  //         this.nodeVertexArray = [];
  //       });
  //       return 'success';
  //     } catch (e) {
  //       return 'error';
  //     }
  //   });
  // }

}
