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

  getInfoData(): void {
    this.infoService.infoData.subscribe((data) => {
      this.info = data;
      console.log(this.info);
    });
  }
}
