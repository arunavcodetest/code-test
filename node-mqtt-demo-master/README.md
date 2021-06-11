# Node Mqtt Demo

This git repository should be used for reviewing code test.

<br/>

## TEST #3- NodeJS/Express Framework
### Objectives:
- Create a NodeJS micro-service that implements a simple REST API embedding the Express server 
- Posts random JSON formatted data to a local MQTT broker (ex: { “timestamp”: tt, “currentValue”: nnn.nnn }
- Create two REST API routes, a GET and a POST. 
- GET route- respond with a JSON message, providing the status (RUNNING or STOPPED) and message topic that the random data is being published too (ex: { “status”: “RUNNING”, “topic”: “xxx/xxx/xxx” }), where “xxx/xxx/xxx” is whatever MQTT topic you have chosen to publish your random data to (ex: “test/random/data”).
- POST route- Accepts a query variable “mode=xxxx”, where xxxx is either “start” or “stop”, and either starts sending random data to the broker, or stops sending random data to the broker.

<br/>

## Command to run the project
```
npm i
npm start
```

## MQTT Broker Details
- MQTT Broker's Hostname: <b>mqtt://broker.hivemq.com</b>
- Topic name for publisher and subscriber: <b>dccpl/test/ltts/nodejs-demo-app</b>

<br/>

## Additional Details
- Publisher (POST Method) will send message in JSON format for every 3 seconds. A log is displayed in console as well.