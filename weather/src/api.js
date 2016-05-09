var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=352ac572ad385d66b5a70ee89c39ffb4';

var kelvintoF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return {
      city: json.name,
      temperature: kelvintoF(json.main.temp),
      description: json.weather[0].description
      }
    });
}
