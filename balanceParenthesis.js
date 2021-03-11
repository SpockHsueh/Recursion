function balanced(testVariable, startIndex = 0, currentIndex = 0) {
  if (startIndex == testVariable.length) {
    return currentIndex == 0
  }

  if (currentIndex < 0) {
    return false
  }

  if (testVariable[startIndex] == "(") { 
    return balanced(testVariable, startIndex + 1, currentIndex + 1)
  }

  // Recursive case2
  else if (testVariable[startIndex] == ")") { 
    return  balanced(testVariable, startIndex + 1, currentIndex - 1)
  }

  else {
    return false
  }
}

testVariable = ["(", "(", ")", ")", "(", ")"]
console.log("The array [\"(\", \"(\", \")\", \")\", \"(\", \")\"] is balanced: " + balanced(testVariable))

testVariable = ["(", "(", ")"]
console.log("The array [\"(\", \"(\", \")\"] is balanced: " + balanced(testVariable))