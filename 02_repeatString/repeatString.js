const repeatString = function (text, number) {
  let result = "";

  if (number < 0) {
    return "ERROR";
  }

  for (let i = 0; i < number; i++) {
    result += text;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
