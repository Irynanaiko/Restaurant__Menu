import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/core/interfaces';
import { InfoService } from 'src/app/core/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // info: Array<Info>;
  info: Array<Info>;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getInfoData();
  }

  getInfoData(): void {
    this.infoService.infoData.subscribe((data) => {
      this.info = data;
      console.log(this.info);
    });
  }
}
