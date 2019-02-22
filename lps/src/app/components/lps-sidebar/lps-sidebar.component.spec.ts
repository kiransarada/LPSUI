import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpsSidebarComponent } from './lps-sidebar.component';

describe('LpsSidebarComponent', () => {
  let component: LpsSidebarComponent;
  let fixture: ComponentFixture<LpsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
