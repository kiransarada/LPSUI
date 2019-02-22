import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasedatasheettableComponent } from './leasedatasheettable.component';

describe('LeasedatasheettableComponent', () => {
  let component: LeasedatasheettableComponent;
  let fixture: ComponentFixture<LeasedatasheettableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasedatasheettableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasedatasheettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
