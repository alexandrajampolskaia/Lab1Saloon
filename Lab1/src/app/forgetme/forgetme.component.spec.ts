import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetmeComponent } from './forgetme.component';

describe('ForgetmeComponent', () => {
  let component: ForgetmeComponent;
  let fixture: ComponentFixture<ForgetmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
