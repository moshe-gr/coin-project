import { Component, OnInit } from '@angular/core';
import { CoinsModel } from 'src/app/models/coins-model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  coinList: CoinsModel[] = [];

  constructor(private searchService: SearchService) {  }

  ngOnInit(): void {
    this.searchService.createCoins();
    this.searchService.coinList.subscribe(coins => this.coinList = coins);
  }

}