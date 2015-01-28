'use strict';

var userZip;
document.querySelector('#add-userZipInput').addEventListener('click', function(event){
  userZip = this.previousElementSibling.value;
  console.log(userZip);
});

var zipUrl = 'http://api.wunderground.com/api/db432a740561cd8d/forecast10day/q/' + userZip + '.json’;

getJSON(zipUrl, function(result){
  var forecastData = result['forecast'];
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

