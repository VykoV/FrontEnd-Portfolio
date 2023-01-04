import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHSFEComponent } from './edit-hsfe.component';

describe('EditHSFEComponent', () => {
  let component: EditHSFEComponent;
  let fixture: ComponentFixture<EditHSFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHSFEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHSFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
