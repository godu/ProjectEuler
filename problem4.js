/*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
*/
var dateStart = new Date();

var reverse = function(str) {
  var str = str.toString();
  var rtn = '';
  for (var i = 0; i < str.length; i++) {
    rtn = str[i] + rtn;
  };
  return rtn.toString();
};

var max = 0;
var maxi = 0;
var maxj = 0;

for (var i = 999; i > 0; i--) {
  for (var j = 999; j > 0; j--) {
    var prod = j*i;
    if(prod > max && prod.toString() === reverse(prod.toString())) {
      max = prod;
      maxi = i;
      maxj = j;
    }
    else if (prod < max)
      j = 0;
  };
};

var dateEnd = new Date();

console.log(max, (dateEnd-dateStart)/1000 + 's');