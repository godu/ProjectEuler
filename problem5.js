/*
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
var dateStart = new Date();

var getPrimeFactors = function(j) {
  var primeFactors = [];
  for (var i = 2; i <= j; i++) {
    if(j%i===0) {
      while(j%i===0) {
        j = j/i;
        if(typeof primeFactors[i] === 'undefined')
          primeFactors[i] = 0;
        primeFactors[i]++;
      }
    }
  };
  return primeFactors;
}

var soluceArray = [];
var mergePrimeFactors = function(arr) {
  arr.forEach(function(value, index) {
    if(typeof soluceArray[index] === 'undefined' || soluceArray[index] < value)
      soluceArray[index] = value;
  });
}

for (var i = 1; i <= 20; i++) {
  mergePrimeFactors(getPrimeFactors(i));
};

var soluce = 1;
soluceArray.forEach(function(value, index) {
  soluce *= Math.pow(index,value);
});

var dateEnd = new Date();

console.log(soluce, (dateEnd-dateStart)/1000 + 's');