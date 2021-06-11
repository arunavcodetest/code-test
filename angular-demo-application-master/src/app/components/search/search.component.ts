import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input() cityname='';
  constructor(private weatherService : WeatherDataService) { }

  ngOnInit(): void {
    this.weatherService.getSearchData(this.cityname).subscribe(data=>{

    })
  }


}
