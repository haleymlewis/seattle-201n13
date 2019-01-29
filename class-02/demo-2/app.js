'use strict';

var dogs = prompt('How many dogs do I own?');

console.log('Number of dogs, ', dogs);

alert('Number of dogs, ' + dogs);

var guitars = prompt('How many guitars do you have?');

if (guitars === '1' || guitars === '2') {
  alert('Yes I have ' + guitars + ' guitars!');
}
