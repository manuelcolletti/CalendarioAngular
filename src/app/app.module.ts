import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayComponent } from './components/day/day.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TimecalendarComponent } from './components/timecalendar/timecalendar.component';
import { ClockComponent } from './components/clock/clock.component';
import { MonthselectorComponent } from './components/monthselector/monthselector.component';


@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    CalendarComponent,
    TimecalendarComponent,
    ClockComponent,
    MonthselectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
