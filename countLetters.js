const countLetters = function(sentence) {
  const letters = {};
  for (const letter of sentence) {
    if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

console.log(countLetters("ACCEPT"));