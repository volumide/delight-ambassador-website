import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupteamComponent } from './followupteam.component';

describe('FollowupteamComponent', () => {
  let component: FollowupteamComponent;
  let fixture: ComponentFixture<FollowupteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowupteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
