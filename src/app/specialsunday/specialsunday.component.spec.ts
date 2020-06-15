import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsundayComponent } from './specialsunday.component';

describe('SpecialsundayComponent', () => {
  let component: SpecialsundayComponent;
  let fixture: ComponentFixture<SpecialsundayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsundayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsundayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
