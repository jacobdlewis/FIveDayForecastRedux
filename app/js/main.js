'use strict';

var zip;
var zipUrl;
var listOfDays = [];



document.querySelector('#userZip').addEventListener('click', function(){
  zip = document.querySelector('#inputZip').value;
  console.log(zip);
  zipUrl = 'http://api.wunderground.com/api/db432a740561cd8d/forecast10day/q/' + zip + '.json';

  getJSON(zipUrl, function(result){
    for(var i = 0; i < 5; i++){
      var currentDay = [];
      var day = result.forecast.simpleforecast.forecastday[i];
      var dailyHigh = day.high.fahrenheit;
      var dailyLow = day.low.fahrenheit;
      var weekday = day.date.weekday_short;
      var icon = day.icon_url;

      currentDay.push(dailyHigh);
      currentDay.push(dailyLow);
      currentDay.push(weekday);
      currentDay.push(icon);


      listOfDays.push(currentDay);
    }
    console.log(listOfDays);
  });
  var ul = document.querySelector('#forecastList');
  ul.appendChild(createList(listOfDays));

});

function createList(array) {
  var docFragment = document.createDocumentFragment();

  _.forEach(array, function(dayArray){
    var ol = document.createElement('ol');

    _.forEach(dayArray, function(dayAttr){
      var li = document.createElement('li');
      var text = document.createTextNode(dayAttr);
      li.appendChild(text);
      ol.appendChild(li);
    })

    docFragment.appendChild(ol);
  })

  return docFragment;
}















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

