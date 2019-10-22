import { Injectable } from '@angular/core';
import { Vertex } from '../classes/algoclasses';

@Injectable({
  providedIn: 'root'
})
export class DijkstraService {

  vertices: any;
  constructor() {
      this.vertices = {};
  }

  addVertex(vertex: Vertex): void {
      console.log('vertex obj' + vertex);
      this.vertices[vertex.name] = vertex;
  }

  //gives array from A->B->C...
  findPointsOfShortestWay(start: string, finish: string, weight: number): string[] {//relaxation : 

      let nextVertex: string = finish;
      const arrayWithVertex: string[] = [];//from where to where
      while (nextVertex !== start) {

          let minWeigth: number = Number.MAX_VALUE;
          let minVertex = '';
          for (let i of this.vertices[nextVertex].nodes) { 
              if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                  minWeigth = this.vertices[i.nameOfVertex].weight;// min weight from infinity vertexes
                  minVertex = i.nameOfVertex;
              }
          }
          arrayWithVertex.push(minVertex);
          nextVertex = minVertex;
      }
      return arrayWithVertex;
  }

//Calculation
  findShortestWay(start: string, finish: string): string[] {

      const nodes: any = {};
      const visitedVertex: string[] = [];

      for (let i in this.vertices) {
          if (this.vertices[i].name === start) {
              this.vertices[i].weight = 0;

          } else {
              this.vertices[i].weight = Number.MAX_VALUE;//setting to infinity i.e max value of number property
          }
          nodes[this.vertices[i].name] = this.vertices[i].weight;
      }

      while (Object.keys(nodes).length !== 0) {
          const sortedVisitedByWeight: string[] = Object.keys(nodes).sort((a, b) => this.vertices[a].weight.toFixed(2) - this.vertices[b].weight.toFixed(2));
         // const sortedVisitedByWeight: Vertex[]  = Object.keys(nodes).sort((a, b) => this.vertices[a].weight.toFixed(2) - this.vertices[b].weight.toFixed(2));

          const currentVertex: Vertex = this.vertices[sortedVisitedByWeight[0]];
          for (let j of currentVertex.nodes) {
              j.weight = Number(j.weight);
              const calculateWeight = currentVertex.weight + j.weight;
              if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                  this.vertices[j.nameOfVertex].weight = calculateWeight;
              }
          }
          delete nodes[sortedVisitedByWeight[0]];
      }
      const finishWeight: number = this.vertices[finish].weight;
      const arrayWithVertex: string[] = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();//this function will start from finish
      arrayWithVertex.push(finish, finishWeight.toString());
      return arrayWithVertex;
  }
}
