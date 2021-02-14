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
    this.res = this.searchService.coinList.find(coin => coin.symbol == cardSymbol);
    if(this.res){
      this.noRes = false
    }
    else{
      this.noRes = true
    }
  }
}
