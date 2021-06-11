# Angular Demo Application

This git repository should be used for reviewing code test.

# Weather station App
- Use angular framework 9+ to build single page dashboard, which will consume any free tier weather api, available for public usage.
Example: https://openweathermap.org/api
- Use angular framework 9+ to build two libraries and publish them to the remote repository for the public review and consumption.
    - First library is the pure ui component. Radial gauge plate with scale and animated arrow to display wind angle or wind speed, temperature etc. Development should be with html canvas.
![Radial Guage](https://ltts-test.dccplworkshop.com/images/image-1.png "Radial Guage")
   - Second library is a module, which represents the facade pattern. Its business value to provide a weather api binder and serve as single entry point for the host application (ui dashboard). Both libraries should be deployed to npm registry and consumed within ui dashboard.
- The ui should also contain search by city or zip code. Reuse the second library to perform additional queries to api on user demand.
![City or Zipcode](https://ltts-test.dccplworkshop.com/images/image-2.png "City or Zipcode")
- Use any npm plot library to illustrate API historical data for the ui.
![City or Zipcode](https://ltts-test.dccplworkshop.com/images/image-3.png "City or Zipcode")
- The ui app should be containerized, so build image and publish to docker hub or any other remote repo for a proper validation.
- All source code (ui dashboard and libraries) should be provided for the review, as well as reference to the deployed npm and docker images.
- The end result just for the reference please see below
- Example of the app (styles are not mandatory, but any additional animation and good sense of design is highly recognizable):
![City or Zipcode](https://ltts-test.dccplworkshop.com/images/image-4.png "City or Zipcode")

## Command to run the project
```
npm i
npm run
```
## Command to build the project
```
npm run build --prod
```
