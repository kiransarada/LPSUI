import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableGenComponent } from './search-table-gen.component';

describe('SearchTableGenComponent', () => {
  let component: SearchTableGenComponent;
  let fixture: ComponentFixture<SearchTableGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTableGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
