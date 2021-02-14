import { Component, OnInit } from '@angular/core';
import { CoinsModel } from 'src/app/models/coins-model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  res: CoinsModel;
  noRes = false;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(cardSymbol): void{
    this.searchService.coinList.subscribe(coins => this.res = coins.find(coin => coin.symbol == cardSymbol));
    this.res? this.noRes = false: this.noRes = true
  }
}