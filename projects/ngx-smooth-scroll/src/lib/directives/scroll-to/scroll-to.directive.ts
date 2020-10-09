import {Directive, HostListener, Input} from '@angular/core';
import {ISmoothScrollOptions} from "../../interfaces/ISmoothScrollOptions";
import {SmoothScrollService} from "../../services/smooth-scroll.service";

@Directive({
  selector: '[smoothScrollTo]'
})
export class ScrollToDirective
{

  constructor(protected _smoothScrollService: SmoothScrollService)
  {
  }

  @Input('scrollTo') scrollTo: string;
  @Input('options') options: Partial<ISmoothScrollOptions> = {};

  @HostListener('click')
  onClick()
  {
    const TARGET:HTMLElement = document.getElementById(this.scrollTo);

    if (!TARGET)
    {
      return;
    }

    this._smoothScrollService.scrollTo(TARGET, this.options);
  };
}
