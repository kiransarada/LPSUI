import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralPrimaryAddrComponent } from './site-general-primary-addr.component';

describe('SiteGeneralPrimaryAddrComponent', () => {
  let component: SiteGeneralPrimaryAddrComponent;
  let fixture: ComponentFixture<SiteGeneralPrimaryAddrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralPrimaryAddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralPrimaryAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
