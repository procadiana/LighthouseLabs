var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr,fcn){
  var newArr = [];
  for (i = 0;i < arr.length; i++){
    newArr.push(fcn(arr[i]));

  }
  return newArr;

};

 map(words, function(word) {
  return word.length;
});

var wordsUpper = map(words, function(word) {
  return word.toUpperCase();
});

var wordsReverse = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(wordsReverse);
