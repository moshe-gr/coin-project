import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private apiService: ApiService, public searchService: SearchService) {  }

  ngOnInit(): void {
    this.apiService.get().subscribe(info => {
      for(let i = 0; i < 50; i++){
        if(!this.searchService.coinList.find(coin => info[i].id == coin.id)){
          this.searchService.coinList = [...this.searchService.coinList, {symbol: info[i].symbol, name: info[i].name, id: info[i].id}]
        }
      }
    })
  }

}