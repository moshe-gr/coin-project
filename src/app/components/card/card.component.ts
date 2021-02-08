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
  infoList: CoinInfoModel = {pic: null, usd: null, ils: null, eur: null, cache: 0};
  more: string = "More";
  isCollapsed = true;
  cb;

  constructor(private apiService: ApiService, private switchService: SwitchService, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
   }

  ngDoCheck(): void {
    this.cb = document.getElementById(this.card.id);
    if(this.cb){
      if(!this.switchService.switchList.find(test => test == this.card.id)){
        this.cb.checked = false;
      }
      else{
        this.cb.checked = true;
      }
    }
    if(this.switchService.switchList.length > 4 && this.cb){      
      if(!this.cb.checked){
        this.cb.disabled = true
      }
      else{
        this.cb.disabled = false
      }
    }
    else if(this.switchService.switchList.length < 5 && this.cb){
      this.cb.disabled = false
    }
  }

  ngOnInit(): void {
  }

  moreInfo(id: string): void{
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
  setSwitch(): void{
    this.cb = document.getElementById(this.card.id);
    if(!this.switchService.switchList.find(test => test == this.card.id)){
      if(this.cb.checked){
        this.switchService.switchList.push(this.card.id);
      }
    }
    else if(!this.cb.checked){
      this.switchService.switchList.splice(this.switchService.switchList.indexOf(this.card.id), 1);
    }
  }
  modal(content): void{
    if(this.switchService.switchList.length > 4 && !this.cb.checked){
      this.open(content)
    }
  }
  open(content) {
    this.modalService.open(content);
  }

}