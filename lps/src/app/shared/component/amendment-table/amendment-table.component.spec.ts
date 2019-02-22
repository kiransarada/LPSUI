import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentTableComponent } from './amendment-table.component';

describe('AmendmentTableComponent', () => {
  let component: AmendmentTableComponent;
  let fixture: ComponentFixture<AmendmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmendmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
