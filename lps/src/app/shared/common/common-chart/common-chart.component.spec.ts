import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { commonChartComponent } from './common-chart.component';

describe('commonChartComponent', () => {
  let component: commonChartComponent;
  let fixture: ComponentFixture<commonChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ commonChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(commonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
