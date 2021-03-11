function printPascal(num) {
  let line
  if (num == 0) {
    return [1]
  } else {
    line = [1]
    
    // Recursive case 
    let previousLine = printPascal(num - 1)
    for (let i = 0; i< previousLine.length -1; i++) {
      const element = previousLine[i];
      const nextElement = previousLine[i+1]
      line.push(element + nextElement)
    }
    line.push(1)
  }
  return line
}

console.log(printPascal(5));