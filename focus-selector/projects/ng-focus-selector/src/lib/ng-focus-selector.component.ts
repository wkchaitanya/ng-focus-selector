import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-focus-selector',
  template: '<ng-content></ng-content>'
})
export class FocusSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
