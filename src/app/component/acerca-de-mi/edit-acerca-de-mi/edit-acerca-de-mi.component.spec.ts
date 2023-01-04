import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcercaDeMiComponent } from './edit-acerca-de-mi.component';

describe('EditAcercaDeMiComponent', () => {
  let component: EditAcercaDeMiComponent;
  let fixture: ComponentFixture<EditAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcercaDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
