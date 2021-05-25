// FUNCTION IMPLEMENTATION
//let greenEmoji = /[\u{1F7E2}]/;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE  U+1F7E2
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);