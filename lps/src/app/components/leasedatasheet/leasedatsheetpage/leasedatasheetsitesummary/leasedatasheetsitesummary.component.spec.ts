import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasedatasheetsitesummaryComponent } from './leasedatasheetsitesummary.component';

describe('LeasedatasheetsitesummaryComponent', () => {
  let component: LeasedatasheetsitesummaryComponent;
  let fixture: ComponentFixture<LeasedatasheetsitesummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasedatasheetsitesummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasedatasheetsitesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
