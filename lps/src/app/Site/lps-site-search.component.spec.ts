import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpsSiteSearchComponent } from './lps-site-search.component';

describe('LpsSiteSearchComponent', () => {
  let component: LpsSiteSearchComponent;
  let fixture: ComponentFixture<LpsSiteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpsSiteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpsSiteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
