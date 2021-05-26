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

const middle = function(arr) {
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      return arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1);
    } else {
      return arr.slice(Math.ceil(arr.length / 2) - 1,Math.ceil(arr.length / 2));
    }
  }
};

const middleEven = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const middleOdd = [1,2,3];

console.log(middle(middleEven));
console.log(middle(middleOdd));
console.log(eqArrays(middle(middleEven),middle(middleOdd)));