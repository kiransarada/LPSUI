import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDynamicTabComponent } from './site-dynamic-tab.component';

describe('SiteDynamicTabComponent', () => {
  let component: SiteDynamicTabComponent;
  let fixture: ComponentFixture<SiteDynamicTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDynamicTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDynamicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
