const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(hArray) {
  if (hArray.length > 0) {
    return hArray.shift();
  } else {
    return hArray;
  }
};

assertEqual(head([3,4]), 4);
assertEqual(head(["Goodbye","Hello"]), "Hello");