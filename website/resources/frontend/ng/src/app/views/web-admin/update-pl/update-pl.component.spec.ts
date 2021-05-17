import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlComponent } from './update-pl.component';

describe('UpdatePlComponent', () => {
  let component: UpdatePlComponent;
  let fixture: ComponentFixture<UpdatePlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
