/*
For example, take two numbers 4242 and 5656.

4242 can be completely divided by 11, 22, 33, 66, 77, 1414, 2121 and 4242.

5656 can be completely divided by 11, 22, 44, 77, 88, 1414, 2828 and 5656.

Therefore, the greatest common divisor of 4242 and 5656 is 1414.
*/

function gcd(num1, num2) {
  if(num1 == num2) {
    return num1
  }
  if (num1 > num2) {
    return gcd(num1 - num2, num2)
  } else {
    return gcd(num1, num2 - num1)
  }
}

console.log(gcd(4,8));


