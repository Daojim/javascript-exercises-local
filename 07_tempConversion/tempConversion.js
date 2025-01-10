const convertToCelsius = function (fahrenheit) {
  fTemp = (fahrenheit - 32) * (5 / 9);
  return fTemp;
};

const convertToFahrenheit = function (celcius) {
  cTemp = celcius * (9 / 5) + 32;
  return cTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
