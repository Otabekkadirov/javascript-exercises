const sumAll = function (a, b) {
  if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }
  let result = 0;
  if (a < b) {
    for (let i = 0; i < b; i++) {
      result += a + i;
    }
    return result;
  } else if (a > b) {
    for (let i = 0; i < a; i++) {
      result += b + i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
