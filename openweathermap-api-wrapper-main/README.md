# OpenWeatherAPI Wrapper

This git repository should be used for reviewing code test.

<br/>

## How to Use

Install the package with npm, import with the require statement in the app, and start to use the apis. First
step is set the params for the request (request the api-key at http://openweathermap.org/register ):

```javascript
	var weather = require('openweather-apis');

	weather.setLang('en');

// set city by name
	weather.setCity('Bengaluru');
 	// or set the coordinates (latitude,longitude)
	weather.setCoordinate(12.9762, 77.6033);
	// or set city by ID (recommended by OpenWeatherMap)
	weather.setCityId(1277333);

    // or set zip code
	weather.setZipCode(560079);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

	// check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID(_Your_APP_KEY_>);
```

## Current Weather Data
Using the following requests to API, Weather data is available in JSON.

## Methods
Import the module and start to use the functions :

```javascript

	// get the Temperature  
	weather.getTemperature(function(err, temp){
		console.log(temp);
	});

	// get the Atm Pressure
	weather.getPressure(function(err, pres){
		console.log(pres);
	});

	// get the Humidity
	weather.getHumidity(function(err, hum){
		console.log(hum);
	});

	// get the Description of the weather condition
	weather.getDescription(function(err, desc){
		console.log(desc);
	});

	// get all the JSON file returned from server (rich of info)
	weather.getAllWeather(function(err, JSONObj){
		console.log(JSONObj);
	});

	// Adds support for the onecall api endpoint.
	weather.getWeatherOneCall = function(err, data){
		
  };
```
Example of a simple JSON Object with temperature, humidity, pressure and description
```javascript

	// get a simple JSON Object with temperature, humidity, pressure and description
	weather.getSmartJSON(function(err, smart){
		console.log(smart);
	});
```

This is the simple JSON object returned by the getSmartJSON(), pretty useful ! The rain 
value can be zero if not measured or a mesured value. 

```javascript
		{
			temp : 25,
			humidity : 88,
			pressure : 101325,
			description : 'sun',
			rain: 4,
			weathercode : 200
		}
```

this JSON object is easy to use and is enough for a lot of possible use of the weather data, for example the
weathercode is easy to use for build check function, draw the icons etc.


## Geographic location
Yes, of course you can set the location to get info by the coordinates, first the latitude, second
the longitude. Sometimes use the coordinates are worse than the city name !

```javascript
	weather.setCoordinate(12.9762, 77.6033);
```


## Error
Use the callback to check if an error is raised on the request (HTTP server unreachable or other connection, request problem),
you need to handle the error on the request, for example :

```javascript
		weather.getTemperature(function(err, temp){
			if(err) console.log(err);

			// normal execution with no error
			});
```

## Test
The package is tested with mocha and chai. You can find the tests in the /test folder.
