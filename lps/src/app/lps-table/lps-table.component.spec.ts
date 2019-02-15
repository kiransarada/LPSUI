import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpsTableComponent } from './lps-table.component';

describe('LpsTableComponent', () => {
  let component: LpsTableComponent;
  let fixture: ComponentFixture<LpsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
