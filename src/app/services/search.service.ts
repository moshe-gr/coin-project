import { Injectable } from '@angular/core';
import { CoinsModel } from '../models/coins-model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  coinList: CoinsModel[] = [];
  
  constructor() { }
}
