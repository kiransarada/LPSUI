import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralDetailsComponent } from './site-general-details.component';

describe('SiteGeneralDetailsComponent', () => {
  let component: SiteGeneralDetailsComponent;
  let fixture: ComponentFixture<SiteGeneralDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
