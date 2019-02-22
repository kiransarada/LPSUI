import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaDetailsModalTableComponent } from './mla-details-modal-table.component';

describe('MlaDetailsModalTableComponent', () => {
  let component: MlaDetailsModalTableComponent;
  let fixture: ComponentFixture<MlaDetailsModalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlaDetailsModalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaDetailsModalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
