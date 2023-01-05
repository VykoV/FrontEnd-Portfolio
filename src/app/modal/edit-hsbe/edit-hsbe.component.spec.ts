import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHSBEComponent } from './edit-hsbe.component';

describe('EditHSBEComponent', () => {
  let component: EditHSBEComponent;
  let fixture: ComponentFixture<EditHSBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHSBEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHSBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
