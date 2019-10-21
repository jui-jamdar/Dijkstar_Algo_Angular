import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';


import { GraphService } from './graph.service';

describe('GraphService', () => {
  let service: GraphService;
  beforeEach(() => TestBed.configureTestingModule({}));
  let router:Router;
  it('should be created', () => {
    const service: GraphService = TestBed.get(GraphService);
    expect(service).toBeTruthy();
  });
  it('getVertices should redirect to http://localhost:3000/verticesArray', () => {
    const navigateSpy = spyOn(router , 'navigate');
    service.getVertices();
    expect(navigateSpy).toEqual(1);
  });
});
