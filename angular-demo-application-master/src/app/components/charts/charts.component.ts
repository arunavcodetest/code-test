import { DatePipe, formatDate, getLocaleDateFormat } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import {  Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  dataSource: Object | undefined;
  xAxis:string[]=[];
  histData:string[]=[];
  histTime:any[]=[];
  histTemperature:string[]=[];
object_name:any = { 
  "id": '',
            "name": "",
            "coord": {
                "lat": '',
                "lon": ''
            },
            "main": {
                "temp": '',
                "feels_like": '',
                "temp_min": '',
                "temp_max": '',
                "pressure": '',
                "humidity": ''
            },
            "dt": '',
            "wind": {
                "speed": '',
                "deg": ''
            },
            "sys": {
                "country": ""
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": ''
            },
            "weather": [
                {
                    "id": '',
                    "main": "",
                    "description": "",
                    "icon": ""
                }
            ]
   }
  @Input() value = [];
  constructor(public datepipe: DatePipe, private weatherService:WeatherDataService) {
  }
ngOnInit()
{
this.histData = this.value;
this.histData.forEach((ele) => {
  this.object_name = ele;
  this.histTemperature.push(this.object_name.main.temp)
 var t = new Date(this.object_name.dt * 1000); // Epoch
    let formattedDate = this.datepipe.transform(t,'HH:mm:ss');
    this.histTime.push(formattedDate);
});
}
chartOption: EChartsOption = {
  xAxis: {
    type: 'category',
    data: this.histTime,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: this.histTemperature,
      type: 'bar',
    },
  ],
  legend:[
    {
      
    }
  ]
};
  }
