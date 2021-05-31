const middle = function(arr) {
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      return arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1);
    } else {
      return arr.slice(Math.ceil(arr.length / 2) - 1,Math.ceil(arr.length / 2));
    }
  }
};

module.exports = middle;