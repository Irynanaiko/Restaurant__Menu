import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/core/interfaces';
import { InfoService } from 'src/app/core/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [InfoService],
})
export class HeaderComponent implements OnInit {
  // info: Array<Info>;
  info: Array<Info>;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    // console.log(this.infoService.getInfoData());

    this.getInfoData();
  }

  async getInfoData(): Promise<void> {
    this.info = await this.infoService.getInfoData().toPromise();
    console.log(this.info);
  }
}
