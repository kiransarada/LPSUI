import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralAssociatedSitesComponent } from './site-general-associated-sites.component';

describe('SiteGeneralAssociatedSitesComponent', () => {
  let component: SiteGeneralAssociatedSitesComponent;
  let fixture: ComponentFixture<SiteGeneralAssociatedSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralAssociatedSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralAssociatedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
