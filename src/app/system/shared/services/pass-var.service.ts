import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PassVarService {

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data) {
    console.log(data);
    this.myMethodSubject.next(data);
  }
}
