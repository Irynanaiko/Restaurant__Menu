import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesItemsComponent } from './categories-items.component';

describe('CategoriesItemsComponent', () => {
  let component: CategoriesItemsComponent;
  let fixture: ComponentFixture<CategoriesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
