const convertToCelsius = function (fahrenheit) {
  let fTemp = (fahrenheit - 32) * (5 / 9);
  let roundedFTemp = Math.round(fTemp * 10) / 10;
  return roundedFTemp;
};

const convertToFahrenheit = function (celcius) {
  let cTemp = celcius * (9 / 5) + 32;
  return cTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
