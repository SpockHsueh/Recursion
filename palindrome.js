function isPalindrome(data) {
  if (data.length <= 1) {
    return true
  } else if (data[0] == data[data.length - 1]) {
    return isPalindrome(data.substring(1, data.length-1))
  }
  return false
}

console.log(isPalindrome('madam'));
