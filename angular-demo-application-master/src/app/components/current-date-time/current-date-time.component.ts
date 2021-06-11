import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date-time',
  templateUrl: './current-date-time.component.html',
  styleUrls: ['./current-date-time.component.scss'],
  providers: [DatePipe]
})
export class CurrentDateTimeComponent implements OnInit {
  public now: Date = new Date();
  testData:string='';
  constructor(private datePipe: DatePipe) {
    this.now = new Date();
    this.testData = formatDate(new Date(), 'dd, MMM yyyy', 'en');
  }

  ngOnInit(): void {
  }

}
