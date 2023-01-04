import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHSFEComponent } from './new-hsfe.component';

describe('NewHSFEComponent', () => {
  let component: NewHSFEComponent;
  let fixture: ComponentFixture<NewHSFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHSFEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHSFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
