import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheusualComponent } from './theusual.component';

describe('TheusualComponent', () => {
  let component: TheusualComponent;
  let fixture: ComponentFixture<TheusualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheusualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheusualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
