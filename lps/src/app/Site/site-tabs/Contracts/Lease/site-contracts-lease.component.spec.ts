import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContractsLeaseComponent } from './site-contracts-lease.component';

describe('SiteContractsLeaseComponent', () => {
  let component: SiteContractsLeaseComponent;
  let fixture: ComponentFixture<SiteContractsLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteContractsLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteContractsLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
