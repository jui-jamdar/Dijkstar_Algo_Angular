import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, ViewChild } from '@angular/core';
import { DijkstraService } from './services/dijkstra.service';
import { Vertex, NodeVertex } from './models/algoclasses';
import { GraphService } from './services/graph.service';
import { Observable, of } from 'rxjs';
import { NgbdModalBasicComponent } from './components/ngbd-modal-basic/ngbd-modal-basic.component';
import { ToastService } from './services/toast.service';
import { AppModule } from './app.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastsContainerComponent } from './components/ngbd-toast-global/toasts-container/toasts-container.component';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

class DijkstraServiceStub {

  constructor() {}

  addVertex() {
    return {
      index: 'A',
      nodeVertexArray: [ 
        {"nameOfVertex" : "B" , "weight" : 0.74}],
      weight:0.74
    };
  }

  findShortestWay(){
    return ["A", "D", "0.2"];
  }

}

class GraphServiceStub {

  constructor() {}
  
  getVertices(){
    return of(response);
  }

}

class ToastServiceStub {

  constructor() {}

  show() {
    return {
     txt:'showmessage',
     options:[]
    };
  }
}

const response=  [
	
		{
			"name": "A",
			"nodes": [ 
				{"nameOfVertex" : "B" , "weight" : 0.74} ,
				{"nameOfVertex" : "C" , "weight" : 2.79} , 
				{"nameOfVertex" : "D" , "weight" : 0.20}],
		    "weight":1
		},
		{
			"name": "B",
			"nodes": [ 
				{"nameOfVertex" : "A" , "weight" : 0.74} ,
				{"nameOfVertex" : "H" , "weight" : 2.64} , 
				{"nameOfVertex" : "E" , "weight" : 4.75}],
		    "weight":1
		},
		{
			"name": "C",
			"nodes": [ 
				{"nameOfVertex" : "A" , "weight" :2.79} ,
				{"nameOfVertex" : "F" , "weight" : 0.79}],
		    "weight":1
		},
		{
			"name": "D",
			"nodes": [ 
				{"nameOfVertex" : "A" , "weight" : 0.20} ,
				{"nameOfVertex" : "L" , "weight" : 2.34}],
		    "weight":1
		},
		{
			"name": "E",
			"nodes": [ 
				{"nameOfVertex" : "B" , "weight" : 4.75} ,
				{"nameOfVertex" : "I" , "weight" : 14.19}],
		    "weight":1
		},
		{
			"name": "F",
			"nodes":  [ 
				{"nameOfVertex" : "C" , "weight" : 0.79} ,
				{"nameOfVertex" : "J" , "weight" : 7.86} ],
		    "weight":1
		},
		{
			"name": "G",
			"nodes": [ 
				{"nameOfVertex" : "H" , "weight" : 6.81},
				{"nameOfVertex" : "Z" , "weight" : 9.25}],
		    "weight":1
		},
		{
			"name": "H",
			"nodes":  [ 
				{"nameOfVertex" : "B" , "weight" : 2.64} ,
				{"nameOfVertex" : "G" , "weight" : 6.81}],
		    "weight":1
		},
		{
			"name": "I",
			"nodes":  [ 
				{"nameOfVertex" : "E" , "weight" : 14.19} ,
				{"nameOfVertex" : "Z" , "weight" : 17.67} ,
				 {"nameOfVertex" :"J" , "weight" : 17.68}],
		    "weight":1
		},
		{
			"name": "L",
			"nodes":  [ 
				{"nameOfVertex" : "D" , "weight" : 2.34} ,
				{"nameOfVertex" : "T" , "weight" : 25.03}],
		    "weight":1
		},
		{
			"name": "T",
			"nodes":  [ 
				{"nameOfVertex" : "L" , "weight" : 25.03} ,
				 {"nameOfVertex" :"S" , "weight" : 27.62}],
		    "weight":1
		},
		{
			"name": "S",
			"nodes":  [ 
				{"nameOfVertex" : "T" , "weight" : 27.62} ,
				{"nameOfVertex" : "O" , "weight" : 12.02}],
		    "weight":1
		},
		{
			"name": "O",
			"nodes":  [ 
				{"nameOfVertex" : "S" , "weight" : 12.02} ,
				{"nameOfVertex" : "U" , "weight" : 8.76}],
		    "weight":1
		},
		{
			"name": "J",
			"nodes":  [ 
				{"nameOfVertex" : "R" , "weight" : 17.74} ,
				{"nameOfVertex" : "F" , "weight" : 7.86},
				{"nameOfVertex" : "I" , "weight" : 17.68}],
		    "weight":1
		},
		{
			"name": "R",
			"nodes":  [ 
				{"nameOfVertex" : "J" , "weight" : 17.74} ,
				{"nameOfVertex" : "P" , "weight" : 12} ,
				{"nameOfVertex" : "L'" , "weight" : 10.65}],
		    "weight":1
		},
		{
			"name": "V",
			"nodes":  [ 
				{"nameOfVertex" : "J" , "weight" : 6.16} ,
				{"nameOfVertex" : "K'" , "weight" : 27.62} 
				],
		    "weight":1
		},
		{
			"name": "Z",
			"nodes":  [ 
				{"nameOfVertex" : "Y" , "weight" : 22.11} ,
				{"nameOfVertex" : "I" , "weight" : 17.67} ,
				{"nameOfVertex" : "G" , "weight" :  9.25}],
		    "weight":1
		},
		{
			"name": "Y",
			"nodes":  [ 
				{"nameOfVertex" : "Q" , "weight" : 42.34} ,
				{"nameOfVertex" : "A'" , "weight" : 36.52} ,
				{"nameOfVertex" : "Z" , "weight" : 22.11}],
		    "weight":1
		},
		{
			"name": "Q",
			"nodes":  [ 
				{"nameOfVertex" : "Y" , "weight" : 42.34} ,
				{"nameOfVertex" : "X" , "weight" : 20.91}],
		    "weight":1
		},
		{
			"name": "L'",
			"nodes":  [ 
				{"nameOfVertex" : "X" , "weight" : 31.71} ,
				{"nameOfVertex" : "R" , "weight" :  10.65}],
		    "weight":1
		},
		{
			"name": "X",
			"nodes":  [ 
				{"nameOfVertex" : "K'" , "weight" : 20.64} ,
				{"nameOfVertex" : "Q" , "weight" : 20.91} ,
				{"nameOfVertex" : "L'" , "weight" : 31.71}],
		    "weight":1
		},
		{
			"name": "P",
			"nodes":  [ 
				{"nameOfVertex" : "U" , "weight" : 17.71} ,
				{"nameOfVertex" : "R" , "weight" : 12}],
		    "weight":1
		},
		{
			"name": "U",
			"nodes":  [ 
				{"nameOfVertex" : "K'" , "weight" : 33.53} ,
				{"nameOfVertex" : "J'" , "weight" : 28.46} ,
				{"nameOfVertex" : "P"  , "weight" : 17.71} ,
				{"nameOfVertex" : "O"  , "weight" : 8.76}],
		    "weight":1
		},
		{
			"name": "J'",
			"nodes":  [ 
				{"nameOfVertex" : "V" , "weight" : 6.16} ,
				{"nameOfVertex" : "U" , "weight" : 28.46}],
		    "weight":1
		},
		{
			"name": "K'",
			"nodes":  [ 
				{"nameOfVertex" : "V" , "weight" : 27.62} ,
				{"nameOfVertex" : "X" , "weight" : 20.64} ,
				{"nameOfVertex" : "W" , "weight" : 44.89} ,
				{"nameOfVertex" : "U" , "weight" : 33.53}],
		    "weight":1
		},
		{
			"name": "A'",
			"nodes":  [ 
				{"nameOfVertex" : "B'" , "weight" : 38.76} ,
				{"nameOfVertex" : "Y" , "weight" : 36.52}],
		    "weight":1
		},
		{
			"name": "B'",
			"nodes":  [ 
				{"nameOfVertex" : "A'" , "weight" : 38.76} ,
				{"nameOfVertex" : "C'" , "weight" : 44.43}],
		    "weight":1
		},
		{
			"name": "W",
			"nodes":  [ 
				{"nameOfVertex" : "C'" , "weight" : 15.34} ,
				{"nameOfVertex" : "K'" , "weight" : 44.89} ,
				{"nameOfVertex" : "E'" , "weight" : 70.09}],
		    "weight":1
		},
		{
			"name": "C'",
			"nodes":  [ 
				{"nameOfVertex" : "E'" , "weight" : 48.86} ,
				{"nameOfVertex" : "B'" , "weight" : 44.43} ,
				{"nameOfVertex" : "W" , "weight" : 15.34}],
		    "weight":1
		},
		{
			"name": "E'",
			"nodes":  [ 
				{"nameOfVertex" : "W" , "weight" : 70.09} ,
				{"nameOfVertex" : "C'" , "weight" : 48.86} ,
				{"nameOfVertex" : "F'" , "weight" : 76.27}],
		    "weight":1
		},
		{
			"name": "F'",
			"nodes":  [ 
				{"nameOfVertex" : "E'" , "weight" : 76.27} ,
				{"nameOfVertex" : "G'" , "weight" : 20.03}],
		    "weight":1
		},
		{
			"name": "G'",
			"nodes":  [ 
				{"nameOfVertex" : "F'" , "weight" : 20.03}],
		    "weight":1
		}
	]

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
		AppComponent,
		SpinnerComponent,
		NgbdModalBasicComponent,
		ToastsContainerComponent,
		NgbToast
      ],
      imports: [RouterTestingModule],
      providers: [
            {
              provide: DijkstraService ,
              useClass: DijkstraServiceStub
            },
            {
              provide: GraphService,
              useClass: GraphServiceStub
            },
            {
              provide: ToastService,
              useClass:ToastServiceStub
            }
          ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

//   it(`should have as title 'dijktras'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('dijktras');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('dijktras app is running!');
//   });

  it('testing onchange' , () => {
	  component.destination = '';
	  component.onChange('hello');
	  expect(component.destination).toEqual('hello');
  });

  it('fnidshortestpath Testing' , () => {
	  component.destination = 'C';
	  component.findShortestPath('A','B');
  })


});
