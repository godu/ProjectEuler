/*
  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?
*/
var dateStart = new Date();

var getLargestPrimeFactors = function(j) {
  var primeFactors = [];
  for (var i = 2; i <= j; i++) {
    if(j%i===0) {
      while(j%i===0) {
        j = j/i;
      }
      primeFactors.push(i);
    }
  };
  return primeFactors;
}

var soluce = getLargestPrimeFactors(600851475143);
var dateEnd = new Date();

console.log(soluce, (dateEnd-dateStart)/1000 + 's');