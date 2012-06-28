/*
  The sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 + ... + 10^2 = 385

  The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)^2 = 55^2 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
var dateStart = new Date();

var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += Math.pow(i, 2);
}
var sqrt = 0;
for (var i = 1; i <= 100; i++) {
  sqrt += i;
}
sqrt = Math.pow(sqrt, 2);

var dateEnd = new Date();

console.log(sqrt - sum, (dateEnd-dateStart)/1000 + 's');