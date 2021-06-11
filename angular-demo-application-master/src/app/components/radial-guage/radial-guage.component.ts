import { Component, Input, OnInit } from '@angular/core';
import { RadialGauge } from 'canvas-gauges';

@Component({
  selector: 'app-radial-guage',
  templateUrl: './radial-guage.component.html',
  styleUrls: ['./radial-guage.component.scss']
})
export class RadialGuageComponent implements OnInit {
@Input() value : any;
 
  constructor() { }

  ngOnInit(): void {
    var gauge = new RadialGauge({
      renderTo: 'gauge-id', // identifier of HTML canvas element or element itself
      width: 150,
      height:150,
      units: 'Wind angle',
      title: false,
      value: 0,
      minValue: 0,
      maxValue:200,
      majorTicks: [
        "N",
        "NE",
        "E",
        "SE",
        "S",
        "SW",
        "W",
        "NW",
        "N"
    ],
    minorTicks: 22,
      strokeTicks: false,
      colorPlate: '#222',
      colorMajorTicks: '#f5f5f5',
      colorMinorTicks: '#ddd',
      colorTitle: '#fff',
      colorUnits: '#ccc',
      colorNeedleEnd: 'rgba(255, 160, 122, .9)',
      valueBox: true,
      animationRule: 'bounce',
      ticksAngle: 360,
      startAngle: 180,
      highlights: [],
      colorNumbers: "#ccc",
      colorNeedle: "rgba(0, 0, 0, 0)",
  });
  // draw initially
  gauge.draw();
  // animate
  setInterval(() => {
     gauge.value = this.value;
  }, 1000);
  }
}
