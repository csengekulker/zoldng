import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassService {
  private service = new BehaviorSubject(1)
  private type = new BehaviorSubject(1)
  currentService = this.service.asObservable()
  currentType = this.type.asObservable()

  constructor() { }

  setService(sid:number) {
    this.service.next(sid)
  }
  setType(tid:number) {
    this.type.next(tid)
  }

}
