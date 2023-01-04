import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSSkillComponent } from './new-sskill.component';

describe('NewSSkillComponent', () => {
  let component: NewSSkillComponent;
  let fixture: ComponentFixture<NewSSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
