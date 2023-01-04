import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHSBEComponent } from './new-hsbe.component';

describe('NewHSBEComponent', () => {
  let component: NewHSBEComponent;
  let fixture: ComponentFixture<NewHSBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHSBEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHSBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
