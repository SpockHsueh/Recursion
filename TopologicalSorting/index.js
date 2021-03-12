const Graph = require('./graph.js')

function helperFunction(testVariable, currentNode, visited, result) {
  visited[currentNode] = true
  if (testVariable.graph.has(currentNode) == true) {
    var currentAdjacencyList = testVariable.graph.get(currentNode);
    for(let i = 0; i < currentAdjacencyList.length; i++) {
      let temp = currentAdjacencyList[i]
      if(visited[temp] == false) {
        helperFunction(testVariable, temp, visited, result);
      }
    }
  }
  result.unshift(currentNode); // Push current vertex to result in the beginning of the array
}

function topologicalSort(testVariable) {
  var visited = new Array(testVariable.vertices).fill(false); // Mark all the vertices as not visited
  
  const result = [];  // stack to store the result/output
  
  for (var currentNode = 0; currentNode < testVariable.vertices; currentNode++) {    
    if (visited[currentNode] == false) {
      helperFunction(testVariable, currentNode, visited, result);
    }
  }
  return result;
}

const myGraph = new Graph(5)
myGraph.addEdge(0, 1) 
myGraph.addEdge(0, 3) 
myGraph.addEdge(2, 3) 
myGraph.addEdge(2, 4) 
myGraph.addEdge(3, 4)
myGraph.addEdge(1, 2) 

console.log(myGraph);
console.log("Topological Sort: " + topologicalSort(myGraph))