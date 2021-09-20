import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/core/services/info.service';
import { Info } from '../../core/interfaces/info.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  info: Array<Info>;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getInfoData();
  }

  async getInfoData(): Promise<void> {
    this.info = await this.infoService.getInfoData().toPromise();
    console.log(this.info);
  }
}
