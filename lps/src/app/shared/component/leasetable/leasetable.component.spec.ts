import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasetableComponent } from './leasetable.component';

describe('TableComponent', () => {
  let component: LeasetableComponent;
  let fixture: ComponentFixture<LeasetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
