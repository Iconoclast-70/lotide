const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(tArray) {
  if (tArray.length > 0) {
    let vTail = tArray.slice(1);
    return vTail;
  } else {
    return tArray;
  }
};

const result = tail(["Hello","Lighthouse","Labs"]);
assertEqual(result.length,2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1],"Labs");

  

