/*


The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

var dateStart = new Date();
var soluce = 0;
var maxChain = 0;

var even = function(n) {return n/2};
var odd = function(n) {return 3*n +1};

var suite = function(n) {
  var chain = 1;
  while(n>1){
    if(n%2 === 0)
      n = even(n);
    else
      n = odd(n);
    chain++
  };
  return chain;
}


for (var i = 0; i < 1000000; i++) {
  
  var chain = suite(i);

  if(chain > maxChain){
    maxChain = chain;
    soluce = i;
  }

};

var dateEnd = new Date();

console.log(soluce, (dateEnd-dateStart)/1000 + 's');

