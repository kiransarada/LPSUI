import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralLinkToFilenetComponent } from './site-general-link-to-filenet.component';

describe('SiteGeneralLinkToFilenetComponent', () => {
  let component: SiteGeneralLinkToFilenetComponent;
  let fixture: ComponentFixture<SiteGeneralLinkToFilenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralLinkToFilenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralLinkToFilenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
