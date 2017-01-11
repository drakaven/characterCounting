function countLetters(str){
  var letters = {};
  str = str.replace(/ /g, "");
  for (letter in str){
    letters.hasOwnProperty(str[letter]) ? letters[str[letter]]+= 1 : letters[str[letter]] = 1;
  }
return letters;
}
