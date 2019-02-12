import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSectionTableComponent } from './common-section-table.component';

describe('CommonSectionTableComponent', () => {
  let component: CommonSectionTableComponent;
  let fixture: ComponentFixture<CommonSectionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSectionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
