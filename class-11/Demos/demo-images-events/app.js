'use strict';

var goatpic = document.getElementById('goatpic');
var allGoats = [];

function GoatPic(name) {
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allGoats.push(this);
}

new GoatPic('cruisin-goat');
new GoatPic('float-your-goat');
new GoatPic('goat-away');
new GoatPic('goat-out-of-hand');
new GoatPic('kissing-goat');
new GoatPic('sassy-goat');
new GoatPic('smiling-goat');
new GoatPic('sweater-goat');

function showRandomGoat() {
  var random = Math.floor(Math.random() * allGoats.length);
  goatpic.src = allGoats[random].filepath;
  goatpic.alt = allGoats[random].name;
  goatpic.title = allGoats[random].name;
  allGoats[random].views++;
  console.log('current goat, ', allGoats[random]);
}

showRandomGoat();

goatpic.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('target, ', event.target);
  showRandomGoat();
}
