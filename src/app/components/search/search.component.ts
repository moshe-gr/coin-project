import { Component, OnInit } from '@angular/core';
import { CoinsModel } from 'src/app/models/coins-model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInfo: CoinsModel = {symbol: null, name: null, id: null};
  res;
  noRes = false;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(cardId): void{
    this.res = this.searchService.coinList.find(test => test.symbol == cardId);
    if(this.res){
      this.searchInfo.symbol = this.res.symbol,
      this.searchInfo.name = this.res.name,
      this.searchInfo.id = this.res.id,
      this.noRes = false
    }
    else{
      this.noRes = true
    }
  }
}
