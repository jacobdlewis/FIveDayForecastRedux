'use strict';

var zip;
var zipUrl;
var dayInfo0 = [];
var dayInfo1 = [];
var dayInfo2 = [];
var dayInfo3 = [];
var dayInfo4 = [];

document.querySelector('#userZip').addEventListener('click', function(){
  zip = document.querySelector('#inputZip').value;
  console.log(zip);
  zipUrl = 'http://api.wunderground.com/api/db432a740561cd8d/forecast10day/q/' + zip + '.json';

  getJSON(zipUrl, function(result){
    for(var i = 0; i < 5; i++){
      var day = result.forecast.simpleforecast.forecastday[i];
      var dailyHigh = day.high.fahrenheit;
      var dailyLow = day.low.fahrenheit;
      var weekday = day.date.weekday_short;
      var icon = day.icon_url;

      array.push(day);
      array.push(dailyHigh);
      array.push(dailyLow);
      array.push(weekday);
      array.push(icon);




      console.log(dayInfo0);
    }
  });
});

















function getJSON(url, cb) {
  var forcastData = new XMLHttpRequest();
  forcastData.open('GET', url);

  forcastData.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  forcastData.send();
}

