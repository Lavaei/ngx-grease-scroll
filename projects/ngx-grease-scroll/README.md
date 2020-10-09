Angular Grease Scroll
==============

> base on [Angular Smooth Scroll](https://github.com/kavil/ng2SmoothScroll)

An Angular 10 library to scroll smoothly to an element with easing.

# Features

  * Uses standard angular package structure.
  * Exposes an angular module to completely match with angular projects.
  * Exposes a service that scrolls the window to an element's location.
  * Provides two directives that enable smooth scrolling to elements.
  * Clean: No classes are added, no jQuery is required, no CSS files or configuration is needed.
  * Scrolling within a custom container added in 2.0.0
  * Strongly typed

# Installation

Install the package:

```bash
npm i ngx-grease-scroll
```

Import it in your module:

```typescript
import { GreaseScrollModule } from "ngx-grease-scroll";

@NgModule({
    imports: [
        GreaseScrollModule
    ]
})
```

# Usage - As a service

```typescript
@Component({
  selector:    'app-section-top-bar',
  templateUrl: './section-top-bar.component.html',
  styleUrls:   ['./section-top-bar.component.scss']
})
export class SectionTopBarComponent
{

  constructor(protected _greaseScrollService: GreaseScrollService,
              @Inject(DOCUMENT) protected _document: Document)
  {
  }

  scrollToTop()
  {
    this._greaseScrollService.scrollTo(this._document.body)
  }
}
```

# Usage - As a directive

This module provides two directives:

#### scroll:

Attribute. Scrolls the window to this element, optionally validating the expression inside scroll-if.

Example:
```html

// Basic - The window will scroll to this element's position when compiling this directive
<div scroll></div>

// With options
<div scroll
	[duration]="800"
	[easing]="easeInQuint"
	[offset]="120"
	[middleAlign]="true"
	[callbackBefore]="aFunction(element)"
	[callbackAfter]="anotherFunction">
	{{...}}
</div>

// Inside a custom container
<div scroll
	[duration]="800"
	[easing]="easeInQuint"
	[offset]="120"
	[callbackBefore]="aFunction(element)"
	[callbackAfter]="anotherFunction"
	[containerId]="container-id">
	{{...}}
</div>

// With condition
<div scroll
	[scrollIf]="myExpression">
	{{...}}
</div>

// Inside ng-repeat
<div scroll
	[scrollIf]="myExpression"
	[duration]="2500">
	{{...}}
</div>
```

####scrollTo:

Attribute. Scrolls the window to the specified element ID when clicking this element.

Example:
```html

// Basic
<a href="#"
	[scrollTo]="'my-element-3'">
	Click me!
</a>

// Custom containers
<a href="#"
	[scrollTo]="'my-element-3'"
	[containerId]="custom-container-id">
	Click me!
</a>

// onClick for non-anchor tags
<div [scrollTo]="'my-element-3'"
	[containerId]="custom-container-id">
	Click me!
</div>

// With options
<button
	[scrollTo]="'elem-id5'"
	[duration]="1800"
	[middleAlign]="true"
	[callbackBefore]="aFunction(element)"
	[callbackAfter]="anotherFunction">
	Scroll to next page.
</button>


```

### Options

#### duration
Type: `Integer`
Default: `800`

The duration of the smooth scroll, in milliseconds.

#### offset
Type: `Integer`
Default: `0`

The offset from the top of the page in which the scroll should stop.

#### easing
type: `string`
default: `easeInOutQuart`

the easing function to be used for this scroll.

#### middleAlign
type: `boolean`
default: `false`

Middle align the scrolled element

#### scrollOnClick
type: `boolean`
default: `false`

(scroll directive only) Scroll to element when it is clicked

#### callbackBefore
type: `function`
default: `function(element) {}`

a callback function to run before the scroll has started. It is passed the
element that will be scrolled to.

#### callbackAfter
type: `function`
default: `function(element) {}`

a callback function to run after the scroll has completed. It is passed the
element that was scrolled to.

#### containerId
type: `string`
default: null

ID of the scrollable container which the element is a child of.

### Easing functions

The available easing functions are:
 * 'easeInQuad'
 * 'easeOutQuad'
 * 'easeInOutQuad'
 * 'easeInCubic'
 * 'easeOutCubic'
 * 'easeInOutCubic'
 * 'easeInQuart'
 * 'easeOutQuart'
 * 'easeInOutQuart'
 * 'easeInQuint'
 * 'easeOutQuint'
 * 'easeInOutQuint'

Cheers.
