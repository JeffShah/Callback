var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func) {
  var output = [];

  arr.forEach(function(elem){
    output.push(func(elem));
  })

  return output;
};

var length = function(word) {
  return word.length;
};

console.log(map(words, length))

var uppCase = function(word) {
  return word.toUpperCase();
};

console.log(map(words, uppCase));

var reversed = function(word) {
  return word.split('').reverse().join('');
};

console.log(map(words, reversed));


// This is just another approach to do the callback-maps:

/*
var words = ["ground", "control", "to", "major", "tom"];

var wordLength = words.map(function(element) {
  var output = [];
  //var wordLength = 
  console.log(element.length);
  return element.length;
});

var wordToUpperCase = words.map(function(element) {
  var output = [];
  return element.toUpperCase();
});

var wordReversed = words.map(function(element) {
  return element.split('').reverse().join('');
});

console.log(wordLength);
console.log(wordToUpperCase);
console.log(wordReversed);
*/