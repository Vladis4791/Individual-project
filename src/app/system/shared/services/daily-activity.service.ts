import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {DailyActivity} from '../models/dailyActivity.model';
import {BaseApi} from '../core/base-api';


@Injectable({
  providedIn: 'root'
})

export class DailyActivityService extends BaseApi {



  getDailyTasks(): Observable<DailyActivity> {
    return this.get('daily-tasks');
  }

  // getBill(): Observable<Bill> {
  //   return this.get('bill');
  // }
  //
  // updateBill(bill: Bill): Observable<Bill> {
  //   return this.put('bill', bill);
  // }
  //
  // getCurrency(base: string = 'RUB'): Observable<any> {
  //   return this.http.get(`http://localhost:3000/currency`);
  // }
// }/

}
