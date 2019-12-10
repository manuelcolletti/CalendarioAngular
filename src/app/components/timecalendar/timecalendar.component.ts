import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-timecalendar',
  templateUrl: './timecalendar.component.html',
  styleUrls: ['./timecalendar.component.css']
})
export class TimecalendarComponent implements OnInit {

  constructor() { }

  currentDate:Date;
  selectedMonth:Date = new Date();

  ngOnInit() {
    
  }

  clockOnDateChanged(date: Date){
    this.currentDate = date;
  }

  monthSelectorOnSelectedMonthChanged(selectedMonth: Date){
    this.selectedMonth = selectedMonth;

    console.log("Mes cambiado: " + selectedMonth);
  }


}
