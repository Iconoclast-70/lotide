const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(shows,key) {
  let foundKey = false;
  for (const show of Object.keys(shows)) {
    if (shows[show] === key) {
      foundKey = true;
      return show;
    }
  }
  if (!foundKey) {
    return undefined;
  }
};

const bestTVShowsByGenre = {
  sciFi: "Battlestar Galactica",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"The DSWire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Battlestar Galactica"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Battlestar Galactica"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;