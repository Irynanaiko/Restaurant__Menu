import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/core/interfaces';
import { InfoService } from 'src/app/core/services/info.service';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.scss'],
})
export class FooterAdminComponent implements OnInit {
  info: Array<Info>;
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getInfoData();
  }

  getInfoData(): void {
    this.infoService.infoData.subscribe((data) => {
      this.info = data;
    });
  }
}
