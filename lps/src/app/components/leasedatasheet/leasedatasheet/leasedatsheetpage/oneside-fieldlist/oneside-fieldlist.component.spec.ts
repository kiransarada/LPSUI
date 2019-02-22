import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesideFieldlistComponent } from './oneside-fieldlist.component';

describe('OnesideFieldlistComponent', () => {
  let component: OnesideFieldlistComponent;
  let fixture: ComponentFixture<OnesideFieldlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesideFieldlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesideFieldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
