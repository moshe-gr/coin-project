import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coinList = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    for(let i = 0; i<50; i++){
      this.apiService.get().subscribe(info => {this.coinList.push({symbol: info[i].symbol, name: info[i].name, id: info[i].id})})
    }
    console.log(this.coinList)
  }

}