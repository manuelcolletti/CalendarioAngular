import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as dateutils from '../../services/date-utils'
import * as moment from 'moment';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-monthselector',
  templateUrl: './monthselector.component.html',
  styleUrls: ['./monthselector.component.css']
})
export class MonthselectorComponent implements OnInit {
  
  public selectedMonth : Date = new Date();
  selectedMonthText: string;

  private subject = new Subject();

get getSubject(): Subject<any>{
  return this.subject;
}

  @Output() onSelectedMonthChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.observable.subscribe(val => console.log(val))
    this.updateSelectedMonth();
  }

  addMonth(){
    this.selectedMonth = dateutils.addMonths(this.selectedMonth, 1);
    this.updateSelectedMonth();
  }

  substractMonth(){
    this.selectedMonth = dateutils.addMonths(this.selectedMonth, -1);
    this.updateSelectedMonth();
  }

  updateSelectedMonth()
  {
    this.subject.next(this.selectedMonth);
    this.onSelectedMonthChanged.emit(this.selectedMonth);
    this.selectedMonthText = moment(this.selectedMonth).format('MMMM YYYY');
  }

}
