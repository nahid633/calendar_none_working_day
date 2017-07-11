import {Component, OnInit} from '@angular/core';
import {DaysService} from './shared/days.service';
import {MyEvent} from './shared/day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public events: MyEvent[] = [];
  event: MyEvent;
  constructor(private daysService: DaysService) {

  }
  ngOnInit() {
    this.daysService.getDays().subscribe(data => {
     if ( data == null){ this.event = new MyEvent(); this.event.start = '9999-09-09 00:00'; this.events.push(this.event) ;}
     else {this.events = data; }
    });

  }
}
