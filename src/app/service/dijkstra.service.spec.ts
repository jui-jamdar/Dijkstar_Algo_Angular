import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Vertex, NodeVertex } from '../classes/algoclasses';

import { DijkstraService } from './dijkstra.service';


fdescribe('DijkstraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DijkstraService = TestBed.get(DijkstraService);
    expect(service).toBeTruthy();
  });
  it('addVertex to be called', () => {
    const service: DijkstraService = TestBed.get(DijkstraService);// no subscription as its not returning any observble
	service.vertices = {};
	service.addVertex({
			"name": "A",
			"nodes": [ 
				{"nameOfVertex" : "B" , "weight" : 0.74} ,
				{"nameOfVertex" : "C" , "weight" : 2.79} , 
				{"nameOfVertex" : "D" , "weight" : 0.20}],
		    "weight":1
    })  
    
    expect( Object.keys(service.vertices).length).toEqual(1);   
  });

  it('findShortestWay to be called', () => {
    const service: DijkstraService = TestBed.get(DijkstraService);// no subscription as its not returning any observble
	service.addVertex({
		"name": "A",
		"nodes": [ 
			{"nameOfVertex" : "B" , "weight" : 0.74} ,
			{"nameOfVertex" : "C" , "weight" : 2.79} , 
			{"nameOfVertex" : "D" , "weight" : 0.20}],
		"weight":1
})  
service.addVertex({
		"name": "B",
		"nodes": [ 
			{"nameOfVertex" : "A" , "weight" : 0.74} ,
			{"nameOfVertex" : "H" , "weight" : 2.64} , 
			{"nameOfVertex" : "E" , "weight" : 4.75}],
		"weight":1
}) 
service.addVertex({
		"name": "C",
		"nodes": [ 
			{"nameOfVertex" : "A" , "weight" :2.79} ,
			{"nameOfVertex" : "F" , "weight" : 0.79}],
		"weight":1
}) 
service.addVertex({
		"name": "D",
		"nodes": [ 
			{"nameOfVertex" : "A" , "weight" : 0.20} ,
			{"nameOfVertex" : "L" , "weight" : 2.34}],
		"weight":1
}) 
service.addVertex({
		"name": "E",
		"nodes": [ 
			{"nameOfVertex" : "B" , "weight" : 4.75} ,
			{"nameOfVertex" : "I" , "weight" : 14.19}],
		"weight":1
}) 
service.addVertex({
		"name": "F",
		"nodes":  [ 
			{"nameOfVertex" : "C" , "weight" : 0.79} ,
			{"nameOfVertex" : "J" , "weight" : 7.86} ],
		"weight":1
	}) 
service.addVertex({
		"name": "G",
		"nodes": [ 
			{"nameOfVertex" : "H" , "weight" : 6.81},
			{"nameOfVertex" : "Z" , "weight" : 9.25}],
		"weight":1
	}) 
service.addVertex({
		"name": "H",
		"nodes":  [ 
			{"nameOfVertex" : "B" , "weight" : 2.64} ,
			{"nameOfVertex" : "G" , "weight" : 6.81}],
		"weight":1
}) 
service.addVertex({
		"name": "I",
		"nodes":  [ 
			{"nameOfVertex" : "E" , "weight" : 14.19} ,
			{"nameOfVertex" : "Z" , "weight" : 17.67} ,
			 {"nameOfVertex" :"J" , "weight" : 17.68}],
		"weight":1
	}) 
service.addVertex({
		"name": "L",
		"nodes":  [ 
			{"nameOfVertex" : "D" , "weight" : 2.34} ,
			{"nameOfVertex" : "T" , "weight" : 25.03}],
		"weight":1
	}) 
service.addVertex({
		"name": "T",
		"nodes":  [ 
			{"nameOfVertex" : "L" , "weight" : 25.03} ,
			 {"nameOfVertex" :"S" , "weight" : 27.62}],
		"weight":1
	}) 
service.addVertex({
		"name": "S",
		"nodes":  [ 
			{"nameOfVertex" : "T" , "weight" : 27.62} ,
			{"nameOfVertex" : "O" , "weight" : 12.02}],
		"weight":1
}) 
service.addVertex({
		"name": "O",
		"nodes":  [ 
			{"nameOfVertex" : "S" , "weight" : 12.02} ,
			{"nameOfVertex" : "U" , "weight" : 8.76}],
		"weight":1
	}) 
service.addVertex({
		"name": "J",
		"nodes":  [ 
			{"nameOfVertex" : "R" , "weight" : 17.74} ,
			{"nameOfVertex" : "F" , "weight" : 7.86},
			{"nameOfVertex" : "I" , "weight" : 17.68}],
		"weight":1
	}) 
service.addVertex({
		"name": "R",
		"nodes":  [ 
			{"nameOfVertex" : "J" , "weight" : 17.74} ,
			{"nameOfVertex" : "P" , "weight" : 12} ,
			{"nameOfVertex" : "L'" , "weight" : 10.65}],
		"weight":1
	}) 
service.addVertex({
		"name": "V",
		"nodes":  [ 
			{"nameOfVertex" : "J" , "weight" : 6.16} ,
			{"nameOfVertex" : "K'" , "weight" : 27.62} 
			],
		"weight":1
	}) 
service.addVertex({
		"name": "Z",
		"nodes":  [ 
			{"nameOfVertex" : "Y" , "weight" : 22.11} ,
			{"nameOfVertex" : "I" , "weight" : 17.67} ,
			{"nameOfVertex" : "G" , "weight" :  9.25}],
		"weight":1
	}) 
service.addVertex({
		"name": "Y",
		"nodes":  [ 
			{"nameOfVertex" : "Q" , "weight" : 42.34} ,
			{"nameOfVertex" : "A'" , "weight" : 36.52} ,
			{"nameOfVertex" : "Z" , "weight" : 22.11}],
		"weight":1
}) 
service.addVertex({
		"name": "Q",
		"nodes":  [ 
			{"nameOfVertex" : "Y" , "weight" : 42.34} ,
			{"nameOfVertex" : "X" , "weight" : 20.91}],
		"weight":1
	}) 
service.addVertex({
		"name": "L'",
		"nodes":  [ 
			{"nameOfVertex" : "X" , "weight" : 31.71} ,
			{"nameOfVertex" : "R" , "weight" :  10.65}],
		"weight":1
	}) 
service.addVertex({
		"name": "X",
		"nodes":  [ 
			{"nameOfVertex" : "K'" , "weight" : 20.64} ,
			{"nameOfVertex" : "Q" , "weight" : 20.91} ,
			{"nameOfVertex" : "L'" , "weight" : 31.71}],
		"weight":1
	}) 
service.addVertex({
		"name": "P",
		"nodes":  [ 
			{"nameOfVertex" : "U" , "weight" : 17.71} ,
			{"nameOfVertex" : "R" , "weight" : 12}],
		"weight":1
	}) 
service.addVertex({
		"name": "U",
		"nodes":  [ 
			{"nameOfVertex" : "K'" , "weight" : 33.53} ,
			{"nameOfVertex" : "J'" , "weight" : 28.46} ,
			{"nameOfVertex" : "P"  , "weight" : 17.71} ,
			{"nameOfVertex" : "O"  , "weight" : 8.76}],
		"weight":1
	}) 
service.addVertex({
		"name": "J'",
		"nodes":  [ 
			{"nameOfVertex" : "V" , "weight" : 6.16} ,
			{"nameOfVertex" : "U" , "weight" : 28.46}],
		"weight":1
	}) 
service.addVertex({
		"name": "K'",
		"nodes":  [ 
			{"nameOfVertex" : "V" , "weight" : 27.62} ,
			{"nameOfVertex" : "X" , "weight" : 20.64} ,
			{"nameOfVertex" : "W" , "weight" : 44.89} ,
			{"nameOfVertex" : "U" , "weight" : 33.53}],
		"weight":1
}) 
service.addVertex({
		"name": "A'",
		"nodes":  [ 
			{"nameOfVertex" : "B'" , "weight" : 38.76} ,
			{"nameOfVertex" : "Y" , "weight" : 36.52}],
		"weight":1
	}) 
service.addVertex({
		"name": "B'",
		"nodes":  [ 
			{"nameOfVertex" : "A'" , "weight" : 38.76} ,
			{"nameOfVertex" : "C'" , "weight" : 44.43}],
		"weight":1
	}) 
service.addVertex({
		"name": "W",
		"nodes":  [ 
			{"nameOfVertex" : "C'" , "weight" : 15.34} ,
			{"nameOfVertex" : "K'" , "weight" : 44.89} ,
			{"nameOfVertex" : "E'" , "weight" : 70.09}],
		"weight":1
}) 
service.addVertex({
		"name": "C'",
		"nodes":  [ 
			{"nameOfVertex" : "E'" , "weight" : 48.86} ,
			{"nameOfVertex" : "B'" , "weight" : 44.43} ,
			{"nameOfVertex" : "W" , "weight" : 15.34}],
		"weight":1
	})
service.addVertex({
		"name": "E'",
		"nodes":  [ 
			{"nameOfVertex" : "W" , "weight" : 70.09} ,
			{"nameOfVertex" : "C'" , "weight" : 48.86} ,
			{"nameOfVertex" : "F'" , "weight" : 76.27}],
		"weight":1
})
service.addVertex({
		"name": "F'",
		"nodes":  [ 
			{"nameOfVertex" : "E'" , "weight" : 76.27} ,
			{"nameOfVertex" : "G'" , "weight" : 20.03}],
		"weight":1
	})
service.addVertex({
		"name": "G'",
		"nodes":  [ 
			{"nameOfVertex" : "F'" , "weight" : 20.03}],
		"weight":1
	})   
    service.findShortestWay('A','B');
        
        
  });

  it('findPointsOfShortestWay to be called', () => {
    const service: DijkstraService = TestBed.get(DijkstraService);// no subscription as its not returning any observble
	service.addVertex({
		"name": "A",
		"nodes": [ 
			{"nameOfVertex" : "B" , "weight" : 0.74} ,
			{"nameOfVertex" : "C" , "weight" : 2.79} , 
			{"nameOfVertex" : "D" , "weight" : 0.20}],
		"weight":1
})  
service.addVertex({
		"name": "B",
		"nodes": [ 
			{"nameOfVertex" : "A" , "weight" : 0.74} ,
			{"nameOfVertex" : "H" , "weight" : 2.64} , 
			{"nameOfVertex" : "E" , "weight" : 4.75}],
		"weight":1
}) 
service.addVertex({
		"name": "C",
		"nodes": [ 
			{"nameOfVertex" : "A" , "weight" :2.79} ,
			{"nameOfVertex" : "F" , "weight" : 0.79}],
		"weight":1
}) 
service.addVertex({
		"name": "D",
		"nodes": [ 
			{"nameOfVertex" : "A" , "weight" : 0.20} ,
			{"nameOfVertex" : "L" , "weight" : 2.34}],
		"weight":1
}) 
service.addVertex({
		"name": "E",
		"nodes": [ 
			{"nameOfVertex" : "B" , "weight" : 4.75} ,
			{"nameOfVertex" : "I" , "weight" : 14.19}],
		"weight":1
}) 
service.addVertex({
		"name": "F",
		"nodes":  [ 
			{"nameOfVertex" : "C" , "weight" : 0.79} ,
			{"nameOfVertex" : "J" , "weight" : 7.86} ],
		"weight":1
	}) 
service.addVertex({
		"name": "G",
		"nodes": [ 
			{"nameOfVertex" : "H" , "weight" : 6.81},
			{"nameOfVertex" : "Z" , "weight" : 9.25}],
		"weight":1
	}) 
service.addVertex({
		"name": "H",
		"nodes":  [ 
			{"nameOfVertex" : "B" , "weight" : 2.64} ,
			{"nameOfVertex" : "G" , "weight" : 6.81}],
		"weight":1
}) 
service.addVertex({
		"name": "I",
		"nodes":  [ 
			{"nameOfVertex" : "E" , "weight" : 14.19} ,
			{"nameOfVertex" : "Z" , "weight" : 17.67} ,
			 {"nameOfVertex" :"J" , "weight" : 17.68}],
		"weight":1
	}) 
service.addVertex({
		"name": "L",
		"nodes":  [ 
			{"nameOfVertex" : "D" , "weight" : 2.34} ,
			{"nameOfVertex" : "T" , "weight" : 25.03}],
		"weight":1
	}) 
service.addVertex({
		"name": "T",
		"nodes":  [ 
			{"nameOfVertex" : "L" , "weight" : 25.03} ,
			 {"nameOfVertex" :"S" , "weight" : 27.62}],
		"weight":1
	}) 
service.addVertex({
		"name": "S",
		"nodes":  [ 
			{"nameOfVertex" : "T" , "weight" : 27.62} ,
			{"nameOfVertex" : "O" , "weight" : 12.02}],
		"weight":1
}) 
service.addVertex({
		"name": "O",
		"nodes":  [ 
			{"nameOfVertex" : "S" , "weight" : 12.02} ,
			{"nameOfVertex" : "U" , "weight" : 8.76}],
		"weight":1
	}) 
service.addVertex({
		"name": "J",
		"nodes":  [ 
			{"nameOfVertex" : "R" , "weight" : 17.74} ,
			{"nameOfVertex" : "F" , "weight" : 7.86},
			{"nameOfVertex" : "I" , "weight" : 17.68}],
		"weight":1
	}) 
service.addVertex({
		"name": "R",
		"nodes":  [ 
			{"nameOfVertex" : "J" , "weight" : 17.74} ,
			{"nameOfVertex" : "P" , "weight" : 12} ,
			{"nameOfVertex" : "L'" , "weight" : 10.65}],
		"weight":1
	}) 
service.addVertex({
		"name": "V",
		"nodes":  [ 
			{"nameOfVertex" : "J" , "weight" : 6.16} ,
			{"nameOfVertex" : "K'" , "weight" : 27.62} 
			],
		"weight":1
	}) 
service.addVertex({
		"name": "Z",
		"nodes":  [ 
			{"nameOfVertex" : "Y" , "weight" : 22.11} ,
			{"nameOfVertex" : "I" , "weight" : 17.67} ,
			{"nameOfVertex" : "G" , "weight" :  9.25}],
		"weight":1
	}) 
service.addVertex({
		"name": "Y",
		"nodes":  [ 
			{"nameOfVertex" : "Q" , "weight" : 42.34} ,
			{"nameOfVertex" : "A'" , "weight" : 36.52} ,
			{"nameOfVertex" : "Z" , "weight" : 22.11}],
		"weight":1
}) 
service.addVertex({
		"name": "Q",
		"nodes":  [ 
			{"nameOfVertex" : "Y" , "weight" : 42.34} ,
			{"nameOfVertex" : "X" , "weight" : 20.91}],
		"weight":1
	}) 
service.addVertex({
		"name": "L'",
		"nodes":  [ 
			{"nameOfVertex" : "X" , "weight" : 31.71} ,
			{"nameOfVertex" : "R" , "weight" :  10.65}],
		"weight":1
	}) 
service.addVertex({
		"name": "X",
		"nodes":  [ 
			{"nameOfVertex" : "K'" , "weight" : 20.64} ,
			{"nameOfVertex" : "Q" , "weight" : 20.91} ,
			{"nameOfVertex" : "L'" , "weight" : 31.71}],
		"weight":1
	}) 
service.addVertex({
		"name": "P",
		"nodes":  [ 
			{"nameOfVertex" : "U" , "weight" : 17.71} ,
			{"nameOfVertex" : "R" , "weight" : 12}],
		"weight":1
	}) 
service.addVertex({
		"name": "U",
		"nodes":  [ 
			{"nameOfVertex" : "K'" , "weight" : 33.53} ,
			{"nameOfVertex" : "J'" , "weight" : 28.46} ,
			{"nameOfVertex" : "P"  , "weight" : 17.71} ,
			{"nameOfVertex" : "O"  , "weight" : 8.76}],
		"weight":1
	}) 
service.addVertex({
		"name": "J'",
		"nodes":  [ 
			{"nameOfVertex" : "V" , "weight" : 6.16} ,
			{"nameOfVertex" : "U" , "weight" : 28.46}],
		"weight":1
	}) 
service.addVertex({
		"name": "K'",
		"nodes":  [ 
			{"nameOfVertex" : "V" , "weight" : 27.62} ,
			{"nameOfVertex" : "X" , "weight" : 20.64} ,
			{"nameOfVertex" : "W" , "weight" : 44.89} ,
			{"nameOfVertex" : "U" , "weight" : 33.53}],
		"weight":1
}) 
service.addVertex({
		"name": "A'",
		"nodes":  [ 
			{"nameOfVertex" : "B'" , "weight" : 38.76} ,
			{"nameOfVertex" : "Y" , "weight" : 36.52}],
		"weight":1
	}) 
service.addVertex({
		"name": "B'",
		"nodes":  [ 
			{"nameOfVertex" : "A'" , "weight" : 38.76} ,
			{"nameOfVertex" : "C'" , "weight" : 44.43}],
		"weight":1
	}) 
service.addVertex({
		"name": "W",
		"nodes":  [ 
			{"nameOfVertex" : "C'" , "weight" : 15.34} ,
			{"nameOfVertex" : "K'" , "weight" : 44.89} ,
			{"nameOfVertex" : "E'" , "weight" : 70.09}],
		"weight":1
}) 
service.addVertex({
		"name": "C'",
		"nodes":  [ 
			{"nameOfVertex" : "E'" , "weight" : 48.86} ,
			{"nameOfVertex" : "B'" , "weight" : 44.43} ,
			{"nameOfVertex" : "W" , "weight" : 15.34}],
		"weight":1
	})
service.addVertex({
		"name": "E'",
		"nodes":  [ 
			{"nameOfVertex" : "W" , "weight" : 70.09} ,
			{"nameOfVertex" : "C'" , "weight" : 48.86} ,
			{"nameOfVertex" : "F'" , "weight" : 76.27}],
		"weight":1
})
service.addVertex({
		"name": "F'",
		"nodes":  [ 
			{"nameOfVertex" : "E'" , "weight" : 76.27} ,
			{"nameOfVertex" : "G'" , "weight" : 20.03}],
		"weight":1
	})
service.addVertex({
		"name": "G'",
		"nodes":  [ 
			{"nameOfVertex" : "F'" , "weight" : 20.03}],
		"weight":1
	})  
    service.findPointsOfShortestWay('A','B', 0.74);
     
        
  });
  
});
