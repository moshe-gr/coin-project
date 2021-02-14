import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoinsModel } from '../models/coins-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private coinsList: CoinsModel[] = [];
  coinList: BehaviorSubject<CoinsModel[]> = new BehaviorSubject<CoinsModel[]>([]);
  
  constructor(private apiService: ApiService) { }

  createCoins(): void{
    this.apiService.get().subscribe(info => {
      for(let i = 0; i < 50; i++){
        if(!this.coinsList.find(coin => info[i].id == coin.id)){
          this.coinsList = [...this.coinsList, info[i]]
          this.coinList.next(this.coinsList)
        }
      }
    });
  }

}
