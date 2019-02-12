import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDynamicOverlayComponent } from './site-dynamic-overlay.component';

describe('SiteDynamicOverlayComponent', () => {
  let component: SiteDynamicOverlayComponent;
  let fixture: ComponentFixture<SiteDynamicOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDynamicOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDynamicOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
