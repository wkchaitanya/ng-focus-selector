# ng-focus-selector

For device like `candy`, `qwerty`, `tv apps`, `stb` etc where element selection happens with keypad (or) remote, selection of element across the application will become complex.

ng-focus-selector tag wraps application and listen to key events like `UP`, `DOWN`, `RIGHT` & `LEFT`.

focus-selector class helps in finding out all focusable elements on page.

Based on row and column definition of elements ng-focus-selector understand how to navigate in the page.

## Installation

Install via Package managers such as `npm` or `yarn`

```
npm install ng-focus-selector --save
# or
yarn add ng-focus-selector
```

## How to use

Import NgFocusSelectorModule

```
import { NgFocusSelectorModule } from 'ng-focus-selector';

@NgModule({
  imports: [ NgFocusSelectorModule ]
})
```

Then in HTML, wrap the app into `<ng-focus-selector></ng-focus-selector>`

Then in TS to give focus to the desired element

```

import { FocusSelectorComponent } from 'ng-focus-selector';

constructor(
@Inject(FocusSelectorComponent) private focusSelectorComponent
) {}

ngAfterViewInit() {
this.focusSelectorComponent.setActiveIndex(1);
}

```

Or focus can be given to element after any async operation

```
this.httpClient.get().subscribe((data) => {
if(data) {
  this.content = data;

    setTimeout(() => {
      this.focusSelectorComponent.setActiveIndex(1);
    });
  }
})
```

References

`Row & Column `
![Reference](https://user-images.githubusercontent.com/54983245/102925066-b9fd7980-44b8-11eb-94df-d3a0927098e2.gif)

```
<div class="focus-selector"  row="0">
  ROW 0
</div>

<div
  class="focus-selector"
  *ngFor="let data of [1, 2]; let i = index"
  row="1"
  [attr.column]="i"
>
ROW 1 <br /> COLUMN {{ i }}
</div>
```

`Grid`
![Reference](https://user-images.githubusercontent.com/54983245/102925147-e1ecdd00-44b8-11eb-8ff9-216e3872e40a.gif)

```
arr = [
  {row: 0, column:0}, { row: 0, column:1 }, { row: 0, column:2},
  {row: 1, column:0}, { row: 1, column:1 }, { row: 1, column:2},
  {row: 2, column:0}, { row: 2, column:1 }, { row: 2, column:2}
];
<div
  class="focus-selector"
  [attr.row]="data.row"
  isgrid="true"
  [column]="data.column"
  *ngFor="let data of arr; let i = index"
>
</div>
```

`Menu`
![Reference](https://user-images.githubusercontent.com/54983245/102925237-03e65f80-44b9-11eb-8728-5a3427483380.gif)

```
<ul>
  <li
    class="focus-selector"
    [attr.row]="i"
    column="0"
    *ngFor="let data of [0, 1, 2, 3, 4, 5]; let i = index"
  >
  MENU ITEM {{ i + 1}}
  </li>
</ul>
```

`Page with Tabs & Header`
![Reference](https://user-images.githubusercontent.com/54983245/102925309-24aeb500-44b9-11eb-82ad-43d5487dbf82.gif)

```
<section>
  <div class="focus-selector" row="0">
    <img src="search" alt="search" />
  </div>
   <div
      class="tabs"
      *ngFor="let tab of tabs; let i = index"
      row="1"
      [column]="i"
      [attr.tabfocus]="false"
      istabheader="true"
      [attr.taburl]="tab.url"
      >
        {{ tab.title | translate }}
    </div>
    <div class="filter">
      ALL
    </div>
    <div
      *ngFor="let content of tabContent; let i = index"
      class="focus-selector"
      column="0"
      [attr.row]="i + 3"
      istabitem="true"
    >
    ROW {{ i }} <br />
    TABINDEX {{ tabIndex }}
    </div>

</section>
```
