const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
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

const ab = { a: "1", b: ["2","3"] };
const ba = { b: ["2","3"], a: "1" };
console.log(eqObjects(ab, ba)); // => true

console.log(eqArrays(ba.b,ab.b));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

console.log(assertEqual(eqObjects(ab,ba),true));
console.log(assertEqual(eqObjects(ab,abc),true));
console.log(assertEqual(eqObjects(ab,abc),false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;