import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-live-reports',
  templateUrl: './live-reports.component.html',
  styleUrls: ['./live-reports.component.css']
})
export class LiveReportsComponent implements OnInit {
  idList: string[]
  constructor(private switchService: SwitchService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.idList = this.switchService.switchList
  }

}
