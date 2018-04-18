import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstSearchResultComponent } from './rst-search-result.component';

describe('RstSearchResultComponent', () => {
  let component: RstSearchResultComponent;
  let fixture: ComponentFixture<RstSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
