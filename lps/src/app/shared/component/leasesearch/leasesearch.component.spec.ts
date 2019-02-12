import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasesearchComponent } from './leasesearch.component';

describe('LeasesearchComponent', () => {
  let component: LeasesearchComponent;
  let fixture: ComponentFixture<LeasesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
