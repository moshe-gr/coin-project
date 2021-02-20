import { Component, Input, OnInit } from '@angular/core';
import { CoinInfoModel } from 'src/app/models/coin-info-model';

@Component({
  selector: 'app-live-coin',
  templateUrl: './live-coin.component.html',
  styleUrls: ['./live-coin.component.css']
})
export class LiveCoinComponent implements OnInit {
  @Input() coin: CoinInfoModel;
  bg = false;
  red = false;
  green = false;

  constructor() {  }
  
  ngOnInit(): void {
    setTimeout(func => this.bg = false, 350, this.bg = true);
    if(this.coin.usd > this.coin.cache){
      this.green = true;
      this.red = false;
    }
    else if(this.coin.usd < this.coin.cache){
      this.red = true;
      this.green = false;
    }
    else{
      this.red = false;
      this.green = false;
    }
  }

}
