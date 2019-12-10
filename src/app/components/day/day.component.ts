import { Component, OnInit, Input } from '@angular/core';
import { DayModule } from '../../models/daymodule';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  calendarDay: DayModule;
  calendarDayClassName: string;

   @Input() dayText: number;
   @Input() isCurrentDay: boolean;
   @Input() isSelectedMonth: boolean;

  constructor() {

  }

  ngOnInit() {

    this.calendarDay = new DayModule(this.dayText, this.isCurrentDay, this.isSelectedMonth);

    if(this.calendarDay.isCurrentDay)
    {
      this.calendarDayClassName = "currentday";
    }
    else if(this.calendarDay.isSelectedMonth)
    {
      this.calendarDayClassName = "currentmonth";
    }
    else
    {
      this.calendarDayClassName = "notcurrentmonth";
    }
  }

}
