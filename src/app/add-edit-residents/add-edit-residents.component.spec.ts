import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditResidentsComponent } from './add-edit-residents.component';

describe('AddEditResidentsComponent', () => {
  let component: AddEditResidentsComponent;
  let fixture: ComponentFixture<AddEditResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditResidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
