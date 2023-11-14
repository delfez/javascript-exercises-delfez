const convertToCelsius = function(temp) {

  let celsius = Math.round((5 / 9) * (temp - 32) * 10)/10
  return celsius

};

const convertToFahrenheit = function(temp) {

  let farenheit = Math.round((((9 / 5 ) * temp) + 32) * 10)/10
  return farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
