# Dijkstras Algorithm

Approach: The idea of the Assessment is to use the original Dijkstra’s algorithm, but also to keep track on the length of the paths by an array that stores the length of the paths from the source vertex, so if we find a shorter path with the same weight, then we will take it.

Let’s follow the upper example iteration by iteration:
Consider we want to find the shortest path from vertex A(Earth) to vertex G(Uranus)

Initial state: The distance and the parent of all vertices are Infinity and NILL respectively, as usual.
Here we are setting to a maximum value of the number property
But now, we have one more array called arrayWithVertex[] that stores the length of the path from the source vertex to all of the vertices.

The arrayWithVertex[] from dijkstras service takes the starting planet, finish Planet(end planet) and the minimum weight it calculated after traversal from findShortestWay() function.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

The alogorith is implemented in dijkstras service.

The graph comes from databse which is using mock JSON from json-server.

We are using lightyear calculation service for calculating and storing the constats.

### Prerequisites

What things you need to install the software and how to install them

```
Softwares required:
Node: 10.16.2
npm :6.10.3
Angular CLI: 8.3.10
OS: win32 x64
Angular: 8.2.11
```

### Installing

A step by step series of examples that tell you how to get a development env running:
```
 1. Install NodeJS (Either install or download(https://nodejs.org/en/download/) and make entry in environment variables) 
 2. To install the Angular CLI globally, run the following command on your console npm install -g @angular/cli
 3. Mocking the backend with the help of JSON-server

```

Steps for creating project
```
1. ng new folder name// example ours is Angular_Dijkstras_Algo ng new "Angular_Dijkstras_Algo"
2. npm install -g @angular/cli
3. ng serve
4. json-server sample.json
5. Run the application in browser by the default http://localhost:4200

Once the source code is present on Github we can clone in our local machine and then follow the below steps:
1. git clone 
2. npm install
3. ng serve
4. json-server sample.json
5. Run the application in browser by the default http://localhost:4200

```

We can just quickly go through a small exapmle for finding shortest path between A->G:
```
According to the graph provided there are various paths from A->G, but the algo will calculate the shortest path using functions from dijkstras service and component (appcomponent).
We are using inbuilt bootstrap for styling.
```

## Running the tests
We are using Karma and Jasmine to run the test cases:

ng test --codeCoverage=true --source-map=true

### Break down into end to end tests

Let's see an example of end to end test for dijkstras service:

```
Dijkstras test case:
1. Add all the imports in the spec file (Make sure all imports are present)
2. Making stub services and functions.
3. 
```

### And coding style 

Modularisation

```
The coding styles which we are using are followed by S.O.L.I.D principles

like 
Single responsibility like dijkstras service is having responsibility over a single part of the functionality using vertices array throughout the application.

Open/closed principle software entities (classes, modules, functions, etc.) should be open for extensions, but closed for modification: We can extend algoclass in different components as it cant be modified because it foloows a specific structure used in different components.

Interface segregation principle : We are implementing services in components and using private methods so we cant modify but can write different function in services implying no additional functionality to an existing function but  by adding new functions.

Dependency Injection: We are using services and this helps for any future components to import these services via injecting and using in the specific components.
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Angular 8](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [JSON-server](https://maven.apache.org/) - Dependency Management
* [S.O.L.I.D] principles
* [Karma] for test cases 
* [Jasmine] for test case implementation

## Versioning

We use [Git](http://semver.org/) for versioning. 
Also we can use[SourceTree].

## Authors

* **Jui Jamdar** - *Initial work* - [Github](https://github.com/jui-jamdar/Dijkstar_Algo_Angular)
