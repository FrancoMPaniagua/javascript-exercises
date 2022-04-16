const ftoc = function(temp) {
  newTemp =  (9 / 5) * (temp - 32);
  return Math.round(newTemp * 10) / 10;
};

const ctof = function(temp) {
  newTemp = temp * (9 / 5) + 32;
  return Math.round(newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
