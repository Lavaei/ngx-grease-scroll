import { ɵɵdefineInjectable, Injectable, Directive, ElementRef, Input, HostListener, NgModule } from '@angular/core';

class GreaseScrollService {
    constructor() {
        this.DEFAULT_OPTIONS = {
            duration: 800,
            offset: 0,
            easing: 'easeInOutQuart',
            callbackBefore: () => null,
            callbackAfter: () => null,
            containerID: '',
            middleAlign: false
        };
        this._timeLapsed = 0;
    }
    /**
     * Smoothly scroll to given element using given options
     * @param {HTMLElement} element The element which you want to scroll to it
     * @param {Partial<IGreaseScrollOptions>} options The scrolling options
     */
    scrollTo(element, options = {}) {
        /**
         * Keep element reference
         */
        this._element = element;
        /**
         * Merge given default options and given options
         */
        this._options = Object.assign(Object.assign({}, this.DEFAULT_OPTIONS), options);
        /**
         * Get container element
         */
        this._container = this._options.containerID ? document.getElementById(this._options.containerID) : null;
        // Initialize the whole thing
        setTimeout(() => {
            this._timeLapsed = 0;
            this._startLocation = this._getScrollLocation();
            this._endLocation = this._getEndLocation(element);
            this._distance = this._endLocation - this._startLocation;
            this._options.callbackBefore(element);
            this._lastFrameTime = Date.now();
            requestAnimationFrame(() => this._animateScroll());
        }, 0);
    }
    /**
     * Retrieve current scroll location
     */
    _getScrollLocation() {
        if (this._container) {
            return this._container.scrollTop;
        }
        else {
            if (window.pageYOffset) {
                return window.pageYOffset;
            }
            else {
                return document.documentElement.scrollTop;
            }
        }
    }
    /**
     * Calculate easing pattern.
     */
    _getEasingPattern(type, time) {
        switch (type) {
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
    }
    ;
    /**
     * Calculate how far to scroll
     */
    _getEndLocation(element) {
        let elementRect = element.getBoundingClientRect(), absoluteElementTop = elementRect.top + window.pageYOffset, location;
        if (this._options.middleAlign) {
            location = (absoluteElementTop + (element.offsetHeight / 2)) - (window.innerHeight / 2);
        }
        else {
            location = absoluteElementTop;
        }
        if (this._options.offset) {
            location = location - this._options.offset;
        }
        return Math.max(location, 0);
    }
    ;
    /**
     * Scroll the page by an increment, and check if it's time to stop
     */
    _animateScroll() {
        const PREVIOUS_FRAME_DURATION = this._lastFrameTime - Date.now();
        this._timeLapsed += PREVIOUS_FRAME_DURATION;
        const PERCENTAGE = this._timeLapsed <= this._options.duration ? this._timeLapsed / this._options.duration : 1;
        this._position = this._startLocation + (this._distance * this._getEasingPattern(this._options.easing, PERCENTAGE));
        if (this._container) {
            this._container.scrollTop = this._position;
        }
        else {
            window.scrollTo(0, this._position);
        }
        let currentLocation = this._getScrollLocation(), scrollHeight = this._container ? this._container.scrollHeight : document.body.scrollHeight, internalHeight = this._container ? this._container.clientHeight + currentLocation : window.innerHeight + currentLocation;
        if (this._position == this._endLocation || currentLocation == this._endLocation || internalHeight > scrollHeight) {
            this._options.callbackAfter(this._element);
        }
        else {
            this._lastFrameTime = Date.now();
            requestAnimationFrame(() => this._animateScroll());
        }
    }
    ;
}
GreaseScrollService.ɵprov = ɵɵdefineInjectable({ factory: function GreaseScrollService_Factory() { return new GreaseScrollService(); }, token: GreaseScrollService, providedIn: "root" });
GreaseScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

class ScrollDirective {
    constructor(_elementRef, _greaseScrollService) {
        this._elementRef = _elementRef;
        this._greaseScrollService = _greaseScrollService;
        this.options = {};
    }
    onClick(target) {
        if (this.scrollOnClick) {
            this.scroll();
        }
    }
    ;
    ngOnInit() {
        this.scroll();
    }
    scroll() {
        if (typeof this.scrollIf === 'undefined' || this.scrollIf === true) {
            setTimeout(() => {
                this._greaseScrollService.scrollTo(this._elementRef.nativeElement, this.options);
            }, 0);
        }
    }
}
ScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[scroll]'
            },] }
];
ScrollDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: GreaseScrollService }
];
ScrollDirective.propDecorators = {
    options: [{ type: Input, args: ['options',] }],
    scrollIf: [{ type: Input, args: ['scrollIf',] }],
    scrollOnClick: [{ type: Input, args: ['scrollOnClick',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
};

class ScrollToDirective {
    constructor(_greaseScrollService) {
        this._greaseScrollService = _greaseScrollService;
        this.options = {};
    }
    onClick() {
        const TARGET = document.getElementById(this.scrollTo);
        if (!TARGET) {
            return;
        }
        this._greaseScrollService.scrollTo(TARGET, this.options);
    }
    ;
}
ScrollToDirective.decorators = [
    { type: Directive, args: [{
                selector: '[scrollTo]'
            },] }
];
ScrollToDirective.ctorParameters = () => [
    { type: GreaseScrollService }
];
ScrollToDirective.propDecorators = {
    scrollTo: [{ type: Input, args: ['scrollTo',] }],
    options: [{ type: Input, args: ['options',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

class GreaseScrollModule {
}
GreaseScrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ScrollToDirective, ScrollDirective],
                exports: [ScrollToDirective, ScrollDirective]
            },] }
];

/*
 * Public API Surface of ngx-grease-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GreaseScrollModule, GreaseScrollService, ScrollDirective, ScrollToDirective };
//# sourceMappingURL=ngx-grease-scroll.js.map
