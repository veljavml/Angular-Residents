import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazResidentsComponent } from './prikaz-residents.component';

describe('PrikazResidentsComponent', () => {
  let component: PrikazResidentsComponent;
  let fixture: ComponentFixture<PrikazResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazResidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrikazResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
