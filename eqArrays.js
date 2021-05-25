const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
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
  return arraysEqual;
};

// TEST CODE
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);


