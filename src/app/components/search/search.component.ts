import { Component, OnInit } from '@angular/core';
import { CoinsModel } from 'src/app/models/coins-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInfo: CoinsModel = {symbol: null, name: null, id: null};
  res;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  search(cardId): void{
    this.apiService.get().subscribe(info => {
      this.res = info.find(test => test.symbol == cardId);
      if(this.res){
        this.searchInfo.symbol = this.res.symbol,
        this.searchInfo.name = this.res.name,
        this.searchInfo.id = this.res.id
      }
    })
  }
}
