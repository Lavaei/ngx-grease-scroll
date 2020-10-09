import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ISmoothScrollOptions} from "../../interfaces/ISmoothScrollOptions";
import {SmoothScrollService} from "../../services/smooth-scroll.service";

@Directive({
  selector: '[smoothScroll]'
})
export class ScrollDirective implements OnInit
{
  constructor(protected _elementRef: ElementRef,
              protected _smoothScrollService: SmoothScrollService)
  {
  }

  @Input('options') options: Partial<ISmoothScrollOptions> = {};
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
        this._smoothScrollService.scrollTo(this._elementRef.nativeElement, this.options);
      }, 0);
    }
  }
}
