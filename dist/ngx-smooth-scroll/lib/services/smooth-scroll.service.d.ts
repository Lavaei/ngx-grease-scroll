import { ISmoothScrollOptions } from "../interfaces/ISmoothScrollOptions";
import { EasingType } from "../types/EasingType";
export declare class SmoothScrollService {
    readonly DEFAULT_OPTIONS: ISmoothScrollOptions;
    protected _options: ISmoothScrollOptions;
    protected _element: HTMLElement;
    protected _intervalRef: number;
    protected _timeLapsed: number;
    protected _position: number;
    protected _startLocation: number;
    protected _endLocation: number;
    protected _distance: number;
    protected _container: HTMLElement;
    protected _lastFrameTime: number;
    /**
     * Smoothly scroll to given element using given options
     * @param {HTMLElement} element The element which you want to scroll to it
     * @param {Partial<ISmoothScrollOptions>} options The scrolling options
     */
    scrollTo(element: HTMLElement, options?: Partial<ISmoothScrollOptions>): void;
    /**
     * Retrieve current scroll location
     */
    protected _getScrollLocation(): number;
    /**
     * Calculate easing pattern.
     */
    protected _getEasingPattern(type: EasingType, time: number): number;
    /**
     * Calculate how far to scroll
     */
    protected _getEndLocation(element: HTMLElement): number;
    /**
     * Scroll the page by an increment, and check if it's time to stop
     */
    protected _animateScroll(): void;
}
