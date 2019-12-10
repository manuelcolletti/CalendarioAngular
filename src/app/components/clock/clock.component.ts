import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  currentDateTime: Date;
  currentTimeString: string;
  currentDateString: string;

  @Output() onDateChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    moment.locale('es');
this.updateTime();
   
    window.setInterval(()=>{
this.updateTime();
  }, 1000)
  }

  updateTime(){
    this.currentDateTime = new Date();
    this.currentTimeString = moment(this.currentDateTime).format('h:mm:ss a');;
    this.currentDateString = moment(this.currentDateTime).format('dddd') + ", " + moment(this.currentDateTime).format('LL');
    this.onDateChanged.emit(this.currentDateTime);
  }

}
