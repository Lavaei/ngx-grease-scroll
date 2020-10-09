import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {IGreaseScrollOptions} from "../../interfaces/IGreaseScrollOptions";
import {GreaseScrollService} from "../../services/grease-scroll.service";

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective implements OnInit
{
  constructor(protected _elementRef: ElementRef,
              protected _greaseScrollService: GreaseScrollService)
  {
  }

  @Input('options') options: Partial<IGreaseScrollOptions> = {};
  @Input('scrollIf') scrollIf: boolean;
  @Input('scrollOnClick') scrollOnClick: boolean;

  @HostListener('click', ['$event.target'])
  onClick(target: EventTarget)
  {
    if (this.scrollOnClick)
    {
      this.scroll();
    }
  };

  public ngOnInit()
  {
    this.scroll();
  }

  private scroll()
  {
    if (typeof this.scrollIf === 'undefined' || this.scrollIf === true)
    {
      setTimeout(() => {
        this._greaseScrollService.scrollTo(this._elementRef.nativeElement, this.options);
      }, 0);
    }
  }
}
