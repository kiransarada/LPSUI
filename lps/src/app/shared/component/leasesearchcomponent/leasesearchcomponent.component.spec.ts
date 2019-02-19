import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasesearchcomponentComponent } from './leasesearchcomponent.component';

describe('LeasesearchcomponentComponent', () => {
  let component: LeasesearchcomponentComponent;
  let fixture: ComponentFixture<LeasesearchcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasesearchcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasesearchcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
