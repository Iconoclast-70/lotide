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

  return arraysEqual;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(words,results1));