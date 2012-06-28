/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?
*/
var dateStart = new Date();

var prime = [];

var j = 2;
while (prime.length < 10001) {
  var isPrime = true;
  for (var i = 0; i < prime.length && isPrime === true; i++) {
    if( j%prime[i] === 0) {
      isPrime = false;
    }
  }
  if(isPrime)
    prime.push(j)
  j++;
}

var dateEnd = new Date();

console.log(prime[10000], (dateEnd-dateStart)/1000 + 's');