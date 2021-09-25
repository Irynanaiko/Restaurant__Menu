import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Dishes } from 'src/app/core/interfaces/dishes.interface';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.scss'],
})
export class NewDishComponent implements OnInit {
  newDishForm: FormGroup;
  isSubmit = false;
  modalHeader: string;
  dish: Dishes;
  constructor(private fb: FormBuilder, private bsmodalRef: BsModalRef) {}

  ngOnInit(): void {
    this.createNewDishForm();
  }

  get nameControl(): any {
    return this.newDishForm.get('name') as FormControl;
  }

  private createNewDishForm(): void {
    if (this.dish?.id) {
      this.newDishForm = this.fb.group({
        name: [
          this.dish?.name || null,
          [Validators.required, Validators.minLength(3)],
        ],

        id: [this.dish.id || null],
        img: [this.dish?.img || null],
        price: [this.dish?.price || null],
        weight: [this.dish?.weight || null],
        descr: [this.dish?.descr || null],
        categoryId: [this.dish?.categoryId || null],
      });
    } else {
      this.newDishForm = this.fb.group({
        name: [
          this.dish?.name || null,
          [Validators.required, Validators.minLength(3)],
        ],
        img: [this.dish?.img || null],
        price: [this.dish?.price || null],
        weight: [this.dish?.weight || null],
        descr: [this.dish?.descr || null],
        categoryId: [this.dish?.categoryId || null],
      });
    }
  }

  onSubmit(): void {
    this.isSubmit = true;

    if (this.newDishForm.invalid) {
      return;
    }

    this.isSubmit = false;

    this.save(this.newDishForm.value);
    this.modalHide();
  }

  modalHide(): void {
    this.bsmodalRef.hide();
  }

  private save(newDish: Dishes): void {}
}
