import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasedatsheetpageComponent } from './leasedatsheetpage.component';

describe('LeasedatsheetpageComponent', () => {
  let component: LeasedatsheetpageComponent;
  let fixture: ComponentFixture<LeasedatsheetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasedatsheetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasedatsheetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
