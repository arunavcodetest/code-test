import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RadialGuageComponent } from './components/radial-guage/radial-guage.component';
import { SearchComponent } from './components/search/search.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CurrentDateTimeComponent } from './components/current-date-time/current-date-time.component';
import { KPIComponent } from './components/kpi/kpi.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import { TabModule } from 'angular-tabs-component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RadialGuageComponent,
    SearchComponent,
    ChartsComponent,
    CurrentDateTimeComponent,
    KPIComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    TabModule,
    HttpClientModule
  ],
  
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
