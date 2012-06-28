/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
var dateStart = new Date();
var soluce = null;

for (var a = 0; a < 1000 && !soluce; a++) {
  for (var b = 0; b < 1000 && !soluce; b++) {
    for (var c = 0; c < 1000 && !soluce; c++) {
      if( Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2) && a+b+c === 1000 && a<b && b<c)
        soluce = a*b*c;
    };
  };
};


var dateEnd = new Date();

console.log(soluce, (dateEnd-dateStart)/1000 + 's');