import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  none: number;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.switchList.subscribe(rep => this.none = rep.length);
    console.log(this.none)
  }

}