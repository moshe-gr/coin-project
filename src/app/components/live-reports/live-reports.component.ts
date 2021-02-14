import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-live-reports',
  templateUrl: './live-reports.component.html',
  styleUrls: ['./live-reports.component.css']
})
export class LiveReportsComponent implements OnInit {
  idList: string[]
  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.idList = this.switchService.switchList
  }

}
