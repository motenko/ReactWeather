var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=cd60ebae4375493724e249011b2655b0';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {  // this is a promise
      //console.log(data.cod);
      if (res.data.cod && res.message) {
        throw new Error(res.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      //console.log(data.cod);
      throw new Error(res.message);
    });
  },
};
