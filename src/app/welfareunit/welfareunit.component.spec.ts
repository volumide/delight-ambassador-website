import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareunitComponent } from './welfareunit.component';

describe('WelfareunitComponent', () => {
  let component: WelfareunitComponent;
  let fixture: ComponentFixture<WelfareunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
