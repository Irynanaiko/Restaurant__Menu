import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Info } from 'src/app/core/interfaces';

@Component({
  selector: 'app-new-info',
  templateUrl: './new-info.component.html',
  styleUrls: ['./new-info.component.scss'],
})
export class NewInfoComponent implements OnInit {
  newInfoForm: FormGroup;
  isSubmit = false;
  modalHeader: string;
  info: Info;
  constructor(private fb: FormBuilder, private bsmodalRef: BsModalRef) {}

  ngOnInit(): void {
    this.createNewInfoForm();
  }

  get nameControl(): any {
    return this.newInfoForm.get('name') as FormControl;
  }

  private createNewInfoForm(): void {
    this.newInfoForm = this.fb.group({
      name: [
        this.info?.name || null,
        [Validators.required, Validators.minLength(3)],
      ],
      email: [
        this.info?.email || null,
        // [Validators.required, Validators.minLength(3)],
      ],
      website: [this.info?.website || null],
      logo: [this.info?.logo || null],
      address: [this.info?.address || null],
      wifi: [this.info?.wifi || null],
      id: [this.info?.id || null],
    });
  }

  onSubmit(): void {
    this.isSubmit = true;

    if (this.newInfoForm.invalid) {
      return;
    }

    this.isSubmit = false;

    this.save(this.newInfoForm.value);
    this.modalHide();
  }

  modalHide(): void {
    this.bsmodalRef.hide();
  }

  private save(newInfo: Info): void {}
}
