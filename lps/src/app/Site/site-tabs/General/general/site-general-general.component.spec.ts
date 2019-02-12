import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralGeneralComponent } from './site-general-general.component';

describe('SiteGeneralGeneralComponent', () => {
  let component: SiteGeneralGeneralComponent;
  let fixture: ComponentFixture<SiteGeneralGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
