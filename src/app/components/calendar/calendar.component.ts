import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DayComponent } from '../day/day.component';
import * as dateutils from '../../services/date-utils'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

 calendarDays: Array<DayComponent>
 @Input() currentDateTime: Date = new Date()
 @Input() selectedMonth: Date = new Date()

  constructor() { }

  ngOnInit() {
    this.calendarDays = dateutils.getDaysForCalendar(this.currentDateTime, this.selectedMonth)
  }

  ngOnChanges()
  {
    this.calendarDays = dateutils.getDaysForCalendar(this.currentDateTime, this.selectedMonth);
  }

}
