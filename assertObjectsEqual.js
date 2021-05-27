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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let isEqual = true; // initialize our equality boolean test
  //Determine if both objects have the same number of keys and that the keys are identical
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const obj1 of Object.keys(object1)) {
      isEqual = (Object.keys(object2).includes(obj1));
    }
  } else {
    isEqual = false;
  }
  //Determine if the keys of both objects have identical values
  if (isEqual) {
    for (const obj1 of Object.keys(object1)) {
      for (const obj2 of Object.keys(object2)) {
        if (obj1 === obj2) {
          if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj2])) {
            isEqual = eqArrays(object1[obj1],object2[obj2]);
          } else {
            isEqual = (object1[obj1] === object2[obj2]);
          }
        }
      }
    }
  }
  return isEqual;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const ab = { a: "1", b: ["2","3"] };
const ba = { b: ["2","3"], a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false