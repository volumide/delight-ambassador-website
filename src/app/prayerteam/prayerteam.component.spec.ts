import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerteamComponent } from './prayerteam.component';

describe('PrayerteamComponent', () => {
  let component: PrayerteamComponent;
  let fixture: ComponentFixture<PrayerteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
