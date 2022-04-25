const removeFromArray = function (...args) {
  let array = args[0];
  let result = [];
  array.forEach((element) => {
    if (!args.includes(element)) {
      result.push(element);
    }
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
