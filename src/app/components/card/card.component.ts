import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CoinInfoModel } from 'src/app/models/coin-info-model';
import { CoinsModel } from 'src/app/models/coins-model';
import { ApiService } from 'src/app/services/api.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, DoCheck{
  @Input() card: CoinsModel;
  infoList: CoinInfoModel = {id: null, pic: null, usd: null, ils: null, eur: null, cache: 0};
  more: string = "More";
  isCollapsed = true;  
  check = false;
  disable = false;
  switchList: string[];

  constructor(private apiService: ApiService, private switchService: SwitchService, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
   }

   ngDoCheck(): void {
    if(this.infoList.id && this.infoList.id != this.card.id && !this.isCollapsed){
      this.apiService.getInfo(this.card.id).subscribe(info => {this.infoList = ({id: info.id, pic: info.image['small'], usd: info.market_data.current_price.usd, ils: info.market_data.current_price.ils, eur: info.market_data.current_price.eur, cache: Date.now()})}) 
    }
    !this.switchList.find(id => id == this.card.id)? this.check = false: this.check = true;
    if(this.switchList.length > 4){      
      !this.check? this.disable = true: this.disable = false;
    }
    else{
      this.disable = false;
    }
  }

  ngOnInit(): void {
    this.switchService.switchList.subscribe(res => this.switchList = res);
  }

  moreInfo(id: string): void{
    if(this.isCollapsed){
      this.more = "More"
    }
    else if(!this.isCollapsed){
      this.more = "Hide"
      if(Date.now() - this.infoList.cache > 120000){
        this.apiService.getInfo(id).subscribe(info => {this.infoList = ({id: info.id, pic: info.image['small'], usd: info.market_data.current_price.usd, ils: info.market_data.current_price.ils, eur: info.market_data.current_price.eur, cache: Date.now()})})
      }
    }
  }
  setSwitch(): void{
    this.check? false: true;    
    if(!this.switchList.find(id => id == this.card.id)){
      this.switchService.add(this.card.id);
    }
    else{
      this.switchService.reduce(this.card.id);
    }
  }
  modal(content): void{
    if(this.switchList.length > 4 && !this.check){
      this.open(content)
    }
  }
  open(content) {
    this.modalService.open(content);
  }

}