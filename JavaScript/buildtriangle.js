/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(x) {
  var Triangle = '';
  for (t = 1; t <= x; t++) {
    Triangle += makeLine(t);
  }
  return Triangle;
}
// your code goes here.  Make sure you call makeLine() in your own code.
console.log(buildTriangle(makeLine(10)));

// test your code by uncommenting the following line
//console.log(buildTriangle(10));
