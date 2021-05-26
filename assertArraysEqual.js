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

  if (arraysEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3, 4], [1, 2, 3]);

