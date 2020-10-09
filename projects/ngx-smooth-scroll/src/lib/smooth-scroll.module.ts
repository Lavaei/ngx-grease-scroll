import {NgModule} from '@angular/core';
import {ScrollToDirective} from './directives/scroll-to/scroll-to.directive';
import {ScrollDirective} from './directives/scroll/scroll.directive';

@NgModule({
  imports:      [],
  declarations: [ScrollToDirective, ScrollDirective],
  exports:      [ScrollToDirective, ScrollDirective]
})
export class SmoothScrollModule
{

}
