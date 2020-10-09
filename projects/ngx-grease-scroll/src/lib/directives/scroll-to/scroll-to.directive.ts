import {Directive, HostListener, Input} from '@angular/core';
import {IGreaseScrollOptions} from "../../interfaces/IGreaseScrollOptions";
import {GreaseScrollService} from "../../services/grease-scroll.service";

@Directive({
  selector: '[scrollTo]'
})
export class ScrollToDirective
{

  constructor(protected _greaseScrollService: GreaseScrollService)
  {
  }

  @Input('scrollTo') scrollTo: string;
  @Input('options') options: Partial<IGreaseScrollOptions> = {};

  @HostListener('click')
  onClick()
  {
    const TARGET:HTMLElement = document.getElementById(this.scrollTo);

    if (!TARGET)
    {
      return;
    }

    this._greaseScrollService.scrollTo(TARGET, this.options);
  };
}
