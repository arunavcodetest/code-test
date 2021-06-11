import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private apiService: ApiService) { }
  getweatherData() {
    debugger;
    return this.apiService.get("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=938287126b4a5f261871c7a710bb35aa");
  }
  getweatherData1() {
    debugger;
    return this.apiService.get("/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=938287126b4a5f261871c7a710bb35aa");
  }
  getSearchData(cityname:string)
  {
    return this.apiService.get("https://openweathermap.org/data/2.5/find?q="+cityname+"&appid=439d4b804bc8187953eb36d2a8c26a02&_=1621871766898&units=metric");
  }
}
