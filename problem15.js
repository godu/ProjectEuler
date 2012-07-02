/*

Starting in the top left corner of a 2×2 grid, there are 6 routes (without backtracking) to the bottom right corner.

How many routes are there through a 20×20 grid?

*/
function clone(x)
{
    if (x.clone)
        return x.clone();
    if (x.constructor == Array)
    {
        var r = [];
        for (var i=0,n=x.length; i<n; i++)
            r.push(clone(x[i]));
        return r;
    }
    return x;
}

var side = 20;

var dateStart = new Date();
var soluce = [];
var fork = 0;


var map = [];
var index = 0;
for (var i = 0; i < side; i++) {
  map[i]= [];
  for (var j = 0; j < side; j++) {
    map[i][j] = index;
    index++;
  };
};

var down = function(route) {
  var last = route[route.length-1]
  if(last.x === side){
    nextStep();
    return;
  }
  var next = {
    x : last.x +1,
    y : last.y
  }

  var contain = false;
  route.forEach(function(m){
    if(m.x === next.x && m.y === next.y)
      contain = true;
  });
  if(contain){
    nextStep();
    return;
  }

  route.push(next);
  fork--;
  nextStep(route);
};

var right = function(route) {
  var last = route[route.length-1]
  if(last.y === side){
    nextStep();
    return;
  }
  var next = {
    x : last.x,
    y : last.y+1
  }

  var contain = false;
  route.forEach(function(m){
    if(m.x === next.x && m.y === next.y)
      contain = true;
  });
  if(contain){
    nextStep();
    return;
  }

  route.push(next);
  fork--;
  nextStep(route);
};


var nextStep = function(route){
  if(route){
    var last = route[route.length-1];
    if(last.x === side && last.y === side){
      soluce.push(route);
    }
    else{
      fork++;
      down(clone(route));
      fork++;
      right(clone(route));
    }
  }
  else{
    if(fork === 0) {
      var dateEnd = new Date();

      console.log(soluce.length, (dateEnd-dateStart)/1000 + 's');
    }
  }
};

var par = [];
par.push({x:0, y:0});
nextStep(par);