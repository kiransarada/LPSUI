import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercontactsTableComponent } from './othercontacts-table.component';

describe('OthercontactsTableComponent', () => {
  let component: OthercontactsTableComponent;
  let fixture: ComponentFixture<OthercontactsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthercontactsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercontactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
