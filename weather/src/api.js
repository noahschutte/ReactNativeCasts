ver rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=352ac572ad385d66b5a70ee89c39ffb4';

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}$lat=${latitude}$lon=${longitude}`;
}
