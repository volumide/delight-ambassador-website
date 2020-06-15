import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseteamComponent } from './databaseteam.component';

describe('DatabaseteamComponent', () => {
  let component: DatabaseteamComponent;
  let fixture: ComponentFixture<DatabaseteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
