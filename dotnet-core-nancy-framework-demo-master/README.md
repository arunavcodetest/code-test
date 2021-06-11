# Dotnet Core - Nancy Framework - Demo

This git repository should be used for reviewing code test.

<br/>

## TEST #1- C#/Nancy Framework
### Objectives:
- Create a C# .NET core micro-service that implements a simple REST API using the Nancy framework (instead of ASP.NET)
- Create two REST API routes, a GET and a POST. 
- GET route- respond with a JSON message { “status”: “OK” }.
- POST route- Accepts a query variable “inputNum=xx”, where xx is a number. Respond with a JSON message that adds 5 to the input value {“status”: “OK”, “result”: xx } where xx = inputNum + 5;

<br/>

## Command to run the project
```
dotnet restore
dotnet run
```
- Base URL: http://localhost:4000

```
GET /
```
- Get Method return the output { “status”: “OK” }

```
POST /add
```
- Input query parameter as "name" (example: http://<base_url>/add?name=5) with whole number.