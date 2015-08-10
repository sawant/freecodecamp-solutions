function findLongestWord(str) {
  var words = str.split(' ');
  var longestWordLength = 0;
  for (var i = 0; i < words.length; i++) {
    longestWordLength = longestWordLength > words[i].length ? longestWordLength : words[i].length;
  }
  return longestWordLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');