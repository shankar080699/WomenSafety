import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularfirestorageService {
  constructor() { }
  private data;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}
