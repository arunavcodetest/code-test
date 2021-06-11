import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KPIComponent implements OnInit {
pressure:string='1013';
humidity:string='100';
windSpeed:string='1.46 m/s';
cloud:string='90%';
  constructor() { }

  ngOnInit(): void {
  }

}
