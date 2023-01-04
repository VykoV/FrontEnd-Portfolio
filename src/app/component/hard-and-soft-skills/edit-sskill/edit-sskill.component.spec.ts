import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSSkillComponent } from './edit-sskill.component';

describe('EditSSkillComponent', () => {
  let component: EditSSkillComponent;
  let fixture: ComponentFixture<EditSSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
