function countLetters (string){
var newLetters = [];
var output = {};
var letterIndex = []
var string = string.toLowerCase();
for (var i = 0; i < string.length; i++){
  if (string[i] === " "){

  }
  else if (!newLetters.includes(string[i])){
    newLetters.push(string[i]);
    output[string[i]] = [i];
  } else {
   output[string[i]].push(i);
  }

}return output;


}

console.log(countLetters("Lighthouse in the house"));