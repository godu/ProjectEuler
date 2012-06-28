/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/
var dateStart = new Date();

var prime = [];

for (var j = 2; j < 2000000; j++) {
  var isPrime = true;
  for (var i = 0; i < prime.length && isPrime === true; i++) {
    if( j%prime[i] === 0) {
      isPrime = false;
    }
  }
  if(isPrime){
    prime.push(j);
  }
}

var soluce = 0;
prime.forEach(function(k) {
  soluce += k;
});


var dateEnd = new Date();

console.log(soluce, (dateEnd-dateStart)/1000 + 's');