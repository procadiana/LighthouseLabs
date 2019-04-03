function countLetters (string){
  var newLetters = [];
  var output = {};
  var string = string.toLowerCase();
  for (var i = 0; i < string.length; i++){
    if (string[i] === " "){

    }
    else if (!newLetters.includes(string[i])){
      newLetters.push(string[i]);
      output[string[i]] = 1;
    } else {
      output[string[i]] += 1;
    }

  }return output;


}

console.log(countLetters("Lighthouse in the house"));