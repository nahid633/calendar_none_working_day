import {Component, Input, OnInit} from '@angular/core';
import {DaysService} from '../shared/days.service';
import {MyEvent} from '../shared/day';
import {SelectItem} from "primeng/primeng";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
 @Input() events: any[];
  header: any;
  event: MyEvent;
  dialogVisible = false;
  idGen= Date.now();
  langs: SelectItem[];
  selectedLang: string;
  constructor(private daysService: DaysService) {
    this.langs = [];
    this.langs.push({label: 'EN', value: 'en-ca'});
    this.langs.push({label: 'AZ', value: 'aze'});
    this.langs.push({label: 'RU', value: 'ru'});
    this.selectedLang = this.langs[0].value;
  }
  ngOnInit() {
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,customButton'
    };
  }
  handleDayClick(event) {
    this.event = new MyEvent();
    this.event.start = event.date.format('YYYY-MM-DD HH:mm');
    this.event.allDay = true;
    this.dialogVisible = true;
  }
  handleEventClick(e) {
    this.event = new MyEvent();
    this.event.title = e.calEvent.title;
    let start = e.calEvent.start;
    let end = e.calEvent.end;
    if (end) {
      this.event.end = end.format('YYYY-MM-DD HH:mm');
    }
    this.event.id = e.calEvent.id;
    this.event.start = start.format('YYYY-MM-DD HH:mm');
    this.event.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

  handleEventDrop(e) {
    this.event = new MyEvent();
    this.event.id = e.event.id;
    this.event.title = e.event.title;
    this.event.start = e.event.start.format('YYYY-MM-DD HH:mm');
    this.event.allDay = e.event.allDay;
    if (e.event.end) {
      this.event.end = e.event.end.format('YYYY-MM-DD HH:mm');
    }
    this.saveEvent();

  }
  handleResizeEvent(e){
    this.event = new MyEvent();
    this.event.id = e.event.id;
    this.event.title = e.event.title;
    this.event.start = e.event.start.format('YYYY-MM-DD HH:mm');
    this.event.allDay = e.event.allDay;
    if (e.event.end) {
      this.event.end = e.event.end.format('YYYY-MM-DD HH:mm');
    }
    this.saveEvent();
  }
  saveEvent() {
    // update
    if (this.event.id) {
      let index: number = this.findEventIndexById(this.event.id);
      if (index >= 0) {
        this.events[index] = this.event;
        this.daysService.updateDay(this.event);
      }
    }
    // new
    else {
      this.event.id = this.idGen++;
      this.events.push(this.event);
      this.daysService.addDay(this.event);
      this.event = null;
    }
    this.dialogVisible = false;
  }
  deleteEvent() {
    let index: number = this.findEventIndexById(this.event.id);
    if ( index >= 0) {
      this.daysService.deleteDay(this.event.id).subscribe(null,
        err => {
          alert('Could not delete Day.');
          // Revert the view back to its original state
          this.events.splice(index, 0, this.event);
        });
       this.events.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for ( let i = 0; i < this.events.length; i++) {
      if (id === this.events[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}

