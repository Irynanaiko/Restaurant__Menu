import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/core/interfaces';
import { InfoService } from 'src/app/core/services/info.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NewInfoComponent } from '../new-info/new-info.component';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  info: Array<Info>;
  modalRef: BsModalRef;
  constructor(
    private infoService: InfoService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getInfoData();
  }

  getInfoData(): void {
    this.infoService.infoData.subscribe((data) => {
      this.info = data;
    });
  }

  editInfo(info: Info): void {
    const initialState = {
      info,
      modalHeader: 'Редагувати інформацію про ресторан',
      save: this.updateInfo.bind(this),
    };
    this.openModal(initialState);
  }

  private updateInfo(info: Info): void {
    this.infoService.updateRestaurantInfo(info.id, info);
  }

  private openModal(initialState: Partial<any>): void {
    this.modalRef = this.modalService.show(
      NewInfoComponent,
      Object.assign(
        {},
        {
          initialState,
          ignoreBackdropClick: true,
        }
      )
    );
  }

  printPage() {
    window.print();
  }
}
