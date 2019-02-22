import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseoverlayiconComponent } from './leaseoverlayicon.component';

describe('LeaseoverlayiconComponent', () => {
  let component: LeaseoverlayiconComponent;
  let fixture: ComponentFixture<LeaseoverlayiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseoverlayiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseoverlayiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
