# Java - Jetty Demo

This git repository should be used for reviewing code test.

<br/>

## TEST #2- Java/Jetty Demo
### Objectives:
- Create a JAVA 1.8+ micro-service that implements a simple REST API embedding a Jetty server.
- Create two REST API routes, a GET and a POST. 
- GET route- respond with a JSON message { “status”: “OK” }.
- POST route- Accepts a query variable “inputNum=xx”, where xx is a number.
- Respond with a JSON message that adds 5 to the input value {“status”: “OK”, “result”: xx } where xx = inputNum + 5;

<br/>

## Command to run the project
```
mvn jetty:run
```
- Base URL: http://localhost:8888

```
GET /demo/display-status
```
- Get Method return the output { “status”: “OK” }

```
POST /demo/addnum
```
- Input query parameter as "inputNum" (example: http://<base_url>/demo/addnum?inputNum=20) with whole number.