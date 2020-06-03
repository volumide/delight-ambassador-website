import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildlinesComponent } from './guildlines.component';

describe('GuildlinesComponent', () => {
  let component: GuildlinesComponent;
  let fixture: ComponentFixture<GuildlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
