import { Component, OnInit } from '@angular/core';
import { CoinInfoModel } from 'src/app/models/coin-info-model';
import { ApiService } from 'src/app/services/api.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-live-reports',
  templateUrl: './live-reports.component.html',
  styleUrls: ['./live-reports.component.css']
})
export class LiveReportsComponent implements OnInit{
  idList: string[];
  liveList: CoinInfoModel[] = [];
  
  constructor(private switchService: SwitchService, private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.switchService.switchList.subscribe(res => this.idList = res);
    for(let i = 0; i < this.idList.length; i++){
      if(!this.liveList.find(info => info.id == this.idList[i])){
        this.apiService.getInfo(this.idList[i]).subscribe(info => this.liveList.push({id: info.id, pic: info.image.large, cache: info.market_data.current_price.usd, usd: info.market_data.current_price.usd, ils: info.market_data.current_price.ils, eur: info.market_data.current_price.eur}));
      }
    }
    setInterval(a => {
      for(let j = 0; j < this.liveList.length; j++){
        if(!this.idList.find(id => id == this.liveList[j].id)){
          this.liveList.splice(j, 1);
        }
      }
      for(let i = 0; i < this.idList.length; i++){
        if(!this.liveList.find(info => info.id == this.idList[i])){
          this.apiService.getInfo(this.idList[i]).subscribe(info => this.liveList.push({id: info.id, pic: info.image.large, cache: info.market_data.current_price.usd, usd: info.market_data.current_price.usd, ils: info.market_data.current_price.ils, eur: info.market_data.current_price.eur}))
        }
        else{
          this.apiService.getInfo(this.liveList[i].id).subscribe(info => {
            this.liveList.splice(this.liveList.indexOf(this.liveList[i]), 1, {id: info.id, pic: info.image.large, cache: this.liveList[i].usd, usd: info.market_data.current_price.usd, ils: info.market_data.current_price.ils, eur: info.market_data.current_price.eur})})
        }
      }
    }, 10000);
  }

}