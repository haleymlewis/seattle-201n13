'use strict';

function yeehaw() {
  alert('YEEHAW!');
  console.log('YEEHAW!');
}

yeehaw();
yeehaw();
yeehaw();
yeehaw();

function clue(weasel, cat, dog) {
  return('The murder took place in ' + cat + ' by ' + weasel + ' with the ' + dog + '.');
}

var person = 'Prof. Plum';
var room = 'Study';
var weapon = 'candlestick';

var answer = clue(person, weapon, room );

console.log(answer);

var results;
function math(numOne, numTwo, numThree) {
  var sum = numOne + numTwo + numThree;
  var product = numOne * numTwo * numThree;

  results = [sum, product];
  return results;
}

console.log('sum = ', math(3, 4, 5)[0]);
console.log('product = ', math(3, 4, 5)[1]);

var thing = math(3, 6, 7); 

console.log('Sum, ', thing[0]);
console.log('Product, ', thing[1]);
console.log('thing, ', thing);