import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBriefcaseComponent } from './new-briefcase.component';

describe('NewBriefcaseComponent', () => {
  let component: NewBriefcaseComponent;
  let fixture: ComponentFixture<NewBriefcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBriefcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
