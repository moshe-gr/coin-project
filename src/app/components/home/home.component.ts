import { Component, OnInit } from '@angular/core';
import { CoinsModel } from 'src/app/models/coins-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coinList: CoinsModel[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get().subscribe(info => {for(let i = 0; i < 50; i++){this.coinList.push({symbol: info[i].symbol, name: info[i].name, id: info[i].id})}})
  }

}