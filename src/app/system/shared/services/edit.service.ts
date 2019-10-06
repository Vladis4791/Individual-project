import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {BaseApi} from '../core/base-api';
import {HttpClient} from '@angular/common/http';
import {DailyActivity} from '../models/dailyActivity.model';

@Injectable({
  providedIn: 'root'
})
export class EditService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  addTask(task: any, nameComponent): Observable<any> {


      return this.post(nameComponent + '-tasks', task);

  }

  deleteTask(taskId: number, nameComponent): Observable<any> {

      return this.deleteItem(`${ nameComponent }-tasks/${taskId}`);

  }
}
