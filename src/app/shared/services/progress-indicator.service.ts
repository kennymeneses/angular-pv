import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  inProgress= new Subject<boolean>();

  constructor() { }

  show(){
    this.inProgress.next(true);
  }

  hidden(){
    this.inProgress.next(false);
  }
}
