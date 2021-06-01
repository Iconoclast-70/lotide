const assertArraysEqual = function(arr1,arr2) {
  let arraysEqual = true;
  if (arr1.length === arr2.length) {
    for (let a1 = 0; a1 < arr1.length; a1++) {
      if (arr1[a1] !== arr2[a1]) {
        arraysEqual = false;
      }
    }
  } else {
    arraysEqual = false;
  }

  if (arraysEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

const letterPositions = function(sentence) {
  const results = {};
  let positions = [];
  for (const letter of sentence) {
    positions = [];
    for (let i = 0; i < sentence.length; i ++) {
      if (sentence[i] === letter) {
        positions.push(i);
      }
    }
    results[letter] = positions;
  }
  return results;
};
console.log(letterPositions("accept"));
assertArraysEqual(letterPositions("accept").a,[0]);
assertArraysEqual(letterPositions("accept").c,[1,2]);
assertArraysEqual(letterPositions("accept").e,[4]);
assertArraysEqual(letterPositions("accept").p,[4]);
assertArraysEqual(letterPositions("accept").t,[5]);

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;