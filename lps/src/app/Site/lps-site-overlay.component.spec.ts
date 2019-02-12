import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpsSiteOverlayComponent } from './lps-site-overlay.component';

describe('LpsSiteOverlayComponent', () => {
  let component: LpsSiteOverlayComponent;
  let fixture: ComponentFixture<LpsSiteOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpsSiteOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpsSiteOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
