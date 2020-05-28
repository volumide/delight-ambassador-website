import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryadminComponent } from './gallaryadmin.component';

describe('GallaryadminComponent', () => {
  let component: GallaryadminComponent;
  let fixture: ComponentFixture<GallaryadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallaryadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
