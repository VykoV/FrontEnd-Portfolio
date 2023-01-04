import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcercaDeMiComponent } from './new-acerca-de-mi.component';

describe('NewAcercaDeMiComponent', () => {
  let component: NewAcercaDeMiComponent;
  let fixture: ComponentFixture<NewAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAcercaDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
