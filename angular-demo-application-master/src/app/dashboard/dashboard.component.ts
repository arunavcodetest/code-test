import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';

declare var require: any;
const weather = require('openweather-api-wrapper');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  historicalData:any;
  currentData:any;
  inputCity:string='';
  rawTemp:any=0;
  constructor(private weatherService:WeatherDataService) { }

  ngOnInit(): void {
    debugger;
    weather.setAPPID('938287126b4a5f261871c7a710bb35aa');

    this.getCityDetails();
}
getCityDetails()
  {
    this.inputCity = this.inputCity == ''?'London':this.inputCity;
     this.weatherService.getSearchData(this.inputCity).subscribe(data=>{
       this.currentData = data.list[0];
       this.rawTemp= Math.floor(this.currentData.main.temp - 273.15);
       this.historicalData = data.list;
   })
  }


}
