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
}
