import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  private _switchList: string[] = [];
  switchList: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  add(id: string): void{
    this._switchList = [...this._switchList, id];
    this.switchList.next(this._switchList);
  }

  reduce(id: string): void{
    this._switchList.splice(this._switchList.indexOf(id), 1);
    this.switchList.next(this._switchList);
  }
}