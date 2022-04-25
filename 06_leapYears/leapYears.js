const leapYears = function (year) {
  // First I check if year is divisible by 400 or 4 without a reminder.
  if (year % 400 == 0 || year % 4 == 0) {
    //   If year divisible by 400 or 4, I check weather it's divisible 100 and not 400
    if (year % 100 == 0 && year % 400 != 0) {
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
