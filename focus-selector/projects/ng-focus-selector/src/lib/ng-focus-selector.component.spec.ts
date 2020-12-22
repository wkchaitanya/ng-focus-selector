import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFocusSelectorComponent } from './ng-focus-selector.component';

describe('NgFocusSelectorComponent', () => {
  let component: NgFocusSelectorComponent;
  let fixture: ComponentFixture<NgFocusSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFocusSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFocusSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
