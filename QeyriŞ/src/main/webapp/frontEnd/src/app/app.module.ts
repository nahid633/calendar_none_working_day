import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import {ScheduleModule, CalendarModule , CheckboxModule , DialogModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DaysService} from './shared/days.service';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {DropdownModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ScheduleModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    DropdownModule
  ],
  providers: [DaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
