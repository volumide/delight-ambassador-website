import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersadminComponent } from './leadersadmin.component';

describe('LeadersadminComponent', () => {
  let component: LeadersadminComponent;
  let fixture: ComponentFixture<LeadersadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadersadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
