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
  // Image: File;
  constructor(private fb: FormBuilder, private bsmodalRef: BsModalRef) {}

  ngOnInit(): void {
    this.createNewDishForm();
  }

  get nameControl(): any {
    return this.newDishForm.get('name') as FormControl;
  }
  get imgControl(): any {
    return this.newDishForm.get('img') as FormControl;
  }
  get priceControl(): any {
    return this.newDishForm.get('price') as FormControl;
  }
  get weightControl(): any {
    return this.newDishForm.get('weight') as FormControl;
  }
  get categoryIdControl(): any {
    return this.newDishForm.get('categoryId') as FormControl;
  }

  // uploadFile(event) {
  //   this.Image = event.target.files[0];
  //   console.log(this.Image);
  // }

  private createNewDishForm(): void {
    if (this.dish?.id) {
      this.newDishForm = this.fb.group({
        name: [
          this.dish?.name || null,
          [Validators.required, Validators.minLength(3)],
        ],

        id: [this.dish?.id || null],
        img: [this.dish?.img || null, [Validators.required]],

        price: [this.dish?.price || null, [Validators.required]],
        weight: [this.dish?.weight || null, [Validators.required]],
        descr: [this.dish?.descr || null],
        categoryId: [this.dish?.categoryId || null, [Validators.required]],
      });
    } else {
      this.newDishForm = this.fb.group({
        name: [
          this.dish?.name || null,
          [Validators.required, Validators.minLength(3)],
        ],
        img: [this.dish?.img || null, [Validators.required]],

        price: [this.dish?.price || null, [Validators.required]],
        weight: [this.dish?.weight || null, [Validators.required]],
        descr: [this.dish?.descr || null],
        categoryId: [this.dish?.categoryId || null, [Validators.required]],
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
