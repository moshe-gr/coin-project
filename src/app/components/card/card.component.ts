import { Component, Input, OnInit } from '@angular/core';
import { CoinInfoModel } from 'src/app/models/coin-info-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card;
  infoList: CoinInfoModel = {pic: null, usd: null, ils: null, eur: null, cache: 0}
  colId: string;
  more = "More"
  isCollapsed = true

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.colId = '#'+this.card.id
  }
  moreInfo(id): void{
    if(this.isCollapsed){
      this.more = "More"
    }
    else if(!this.isCollapsed){
      this.more = "Hide"
      if(Date.now() - this.infoList.cache > 120000){
        this.apiService.getInfo(id).subscribe(info => {this.infoList = ({pic: info.image['small'], usd: info.market_data.current_price.usd, ils: info.market_data.current_price.ils, eur: info.market_data.current_price.eur, cache: Date.now()})})
      }
    }
  }

}