import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class DaysService {
  private url= 'http://localhost:8080/api/days';
  constructor(private http: Http) {
  }
  getDays() {
    return this.http.get(this.url)
      .map(res => res.json());
  }
  getDay(id) {
    return this.http.get(this.getDayUrl(id))
      .map(res => res.json());
  }
  addDay(Day) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(Day), options ).subscribe(data => {console.log(data)});
  }
  updateDay(Day) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.getDayUrl(Day.id), JSON.stringify(Day), options )
      .subscribe(res => console.log(res));
  }
  deleteDay(id) {
    console.log(this.getDayUrl(id));
    return this.http.delete(this.getDayUrl(id));
  }
  private getDayUrl(id) {
    return this.url + '/' + id;
  }
}
