const Graph = require('./graph.js')

const myGraph = new Graph(5)
myGraph.addEdge(0, 1) 
myGraph.addEdge(0, 3) 
myGraph.addEdge(1, 2) 
myGraph.addEdge(2, 3) 
myGraph.addEdge(2, 4) 
myGraph.addEdge(3, 4)
console.log(myGraph);
