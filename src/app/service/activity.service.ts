import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity(type: string, partecipants: number, price: number): Observable<Activity>{
    return this.http.get<Activity>(`http://www.boredapi.com/api/activity?type=${type}&participants=${partecipants}&price=${price}`)
  }

  getByKey(key: string): Observable<Activity> {
    return this.http.get<Activity>(`http://www.boredapi.com/api/activity?key=${key}`)
  }

}


