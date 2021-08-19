const flatArr = [];
const flatten = (arr) => {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      flatArr.push(item);
    }
  }
  return flatArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
