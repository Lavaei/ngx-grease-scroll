import {Injectable} from '@angular/core';
import {ISmoothScrollOptions} from "../interfaces/ISmoothScrollOptions";
import {EasingType} from "../types/EasingType";

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService
{
  readonly DEFAULT_OPTIONS: ISmoothScrollOptions = {
    duration:       800,
    offset:         0,
    easing:         'easeInOutQuart',
    callbackBefore: () => null,
    callbackAfter:  () => null,
    containerID:    '',
    middleAlign:    false
  };

  protected _options: ISmoothScrollOptions;
  protected _element: HTMLElement;
  protected _intervalRef: number;
  protected _timeLapsed: number = 0;
  protected _position: number;
  protected _startLocation: number;
  protected _endLocation: number;
  protected _distance: number;
  protected _container: HTMLElement;
  protected _lastFrameTime:number;


  /**
   * Smoothly scroll to given element using given options
   * @param {HTMLElement} element The element which you want to scroll to it
   * @param {Partial<ISmoothScrollOptions>} options The scrolling options
   */
  scrollTo(element: HTMLElement, options: Partial<ISmoothScrollOptions> = {})
  {
    /**
     * Keep element reference
     */
    this._element = element;

    /**
     * Merge given default options and given options
     */
    this._options = {...this.DEFAULT_OPTIONS, ...options};

    /**
     * Get container element
     */
    this._container = this._options.containerID ? document.getElementById(this._options.containerID) : null;


    // Initialize the whole thing
    setTimeout(() => {

      this._timeLapsed    = 0;
      this._startLocation = this._getScrollLocation();
      this._endLocation   = this._getEndLocation(element);
      this._distance      = this._endLocation - this._startLocation;

      this._options.callbackBefore(element);

      this._lastFrameTime = Date.now();

      requestAnimationFrame(() => this._animateScroll());
    }, 0);

  }

  /**
   * Retrieve current scroll location
   */
  protected _getScrollLocation(): number
  {
    if (this._container)
    {
      return this._container.scrollTop;
    }
    else
    {
      if (window.pageYOffset)
      {
        return window.pageYOffset;
      }
      else
      {
        return document.documentElement.scrollTop;
      }
    }
  }

  /**
   * Calculate easing pattern.
   */
  protected _getEasingPattern(type: EasingType, time: number): number
  {
    switch (type)
    {
      case 'easeInQuad':
        return time * time; // accelerating from zero velocity
      case 'easeOutQuad':
        return time * (2 - time); // decelerating to zero velocity
      case 'easeInOutQuad':
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
      case 'easeInCubic':
        return time * time * time; // accelerating from zero velocity
      case 'easeOutCubic':
        return (--time) * time * time + 1; // decelerating to zero velocity
      case 'easeInOutCubic':
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
      case 'easeInQuart':
        return time * time * time * time; // accelerating from zero velocity
      case 'easeOutQuart':
        return 1 - (--time) * time * time * time; // decelerating to zero velocity
      case 'easeInOutQuart':
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
      case 'easeInQuint':
        return time * time * time * time * time; // accelerating from zero velocity
      case 'easeOutQuint':
        return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
      case 'easeInOutQuint':
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
      default:
        return time;
    }
  };

  /**
   * Calculate how far to scroll
   */
  protected _getEndLocation(element: HTMLElement): number
  {
    let elementRect: DOMRect       = element.getBoundingClientRect(),
        absoluteElementTop: number = elementRect.top + window.pageYOffset,
        location: number;

    if (this._options.middleAlign)
    {
      location = (absoluteElementTop + (element.offsetHeight / 2)) - (window.innerHeight / 2);
    }
    else
    {
      location = absoluteElementTop;
    }

    if (this._options.offset)
    {
      location = location - this._options.offset;
    }

    return Math.max(location, 0);
  };

  /**
   * Scroll the page by an increment, and check if it's time to stop
   */
  protected _animateScroll()
  {
    const PREVIOUS_FRAME_DURATION:number = this._lastFrameTime - Date.now();

    this._timeLapsed += PREVIOUS_FRAME_DURATION;

    const PERCENTAGE: number = this._timeLapsed <= this._options.duration ? this._timeLapsed / this._options.duration : 1;

    this._position = this._startLocation + (this._distance * this._getEasingPattern(this._options.easing, PERCENTAGE));

    if (this._container)
    {
      this._container.scrollTop = this._position;
    }
    else
    {
      window.scrollTo(0, this._position);
    }

    let currentLocation = this._getScrollLocation(),
        scrollHeight: number = this._container ? this._container.scrollHeight : document.body.scrollHeight,
        internalHeight: number = this._container ? this._container.clientHeight + currentLocation : window.innerHeight + currentLocation;


    if (this._position == this._endLocation || currentLocation == this._endLocation || internalHeight > scrollHeight)
    {
      this._options.callbackAfter(this._element);
    }
    else
    {
      this._lastFrameTime = Date.now();
      requestAnimationFrame(() => this._animateScroll());
    }
  };

}
