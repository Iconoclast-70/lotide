const assertEqual = require('./assertEqual');

const head = function(hArray) {
  if (hArray.length > 0) {
    return hArray.shift();
  } else {
    return hArray;
  }
};

module.exports = head;