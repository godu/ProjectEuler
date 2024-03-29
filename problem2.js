/*
  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
var dateStart = new Date();

var values = [0,1,2];
var Fibonacci = function(i) {
  if (typeof values[i] === 'undefined' && i > 2) {
    values[i] = Fibonacci(i-1) + Fibonacci(i-2);
  }
  return values[i];
}

var sum = 0;
var i = 0;
while(Fibonacci(i) < 4000000) {
  if(Fibonacci(i)%2 === 0)
    sum += Fibonacci(i);
  i++;
}

var dateEnd = new Date();

console.log(sum, (dateEnd-dateStart)/1000 + 's');