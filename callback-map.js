var words = ["ground", "control", "to", "major", "tom"];

var wordLength = words.map(function(num) {
  var output = [];
  var wordLength =
  console.log(num.length);
  return word.length;
});

var wordToUpperCase = word.map(function(num) {
  var output = [];
  return word.toUpperCase();
});

var wordReversed = word.map(function(num) {
  return word.split('').reverse().join('');
});

console.log(wordLength);
console.log(wordToUpperCase);
console.log(wordReversed);

/*

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



*/

