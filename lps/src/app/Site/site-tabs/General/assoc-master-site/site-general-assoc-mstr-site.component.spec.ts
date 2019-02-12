import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralAssocMstrSiteComponent } from './site-general-assoc-mstr-site.component';

describe('SiteGeneralAssocMstrSiteComponent', () => {
  let component: SiteGeneralAssocMstrSiteComponent;
  let fixture: ComponentFixture<SiteGeneralAssocMstrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralAssocMstrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralAssocMstrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
