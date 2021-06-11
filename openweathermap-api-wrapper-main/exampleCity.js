var weather = require('./index.js');

weather.setAPPID('<Your APP KEY>');
weather.setLang('it');
weather.setUnits('metric');
weather.setCity('Bengaluru');
//weather.setCoordinate(41.9152,12.5068)

weather.getAllWeather(function(err, JSONObj){
    console.log(JSONObj);
});
