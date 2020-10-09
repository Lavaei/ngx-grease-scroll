(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-smooth-scroll', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-smooth-scroll'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var SmoothScrollService = /** @class */ (function () {
        function SmoothScrollService() {
            this.DEFAULT_OPTIONS = {
                duration: 800,
                offset: 0,
                easing: 'easeInOutQuart',
                callbackBefore: function () { return null; },
                callbackAfter: function () { return null; },
                containerID: '',
                middleAlign: false
            };
            this._timeLapsed = 0;
        }
        /**
         * Smoothly scroll to given element using given options
         * @param {HTMLElement} element The element which you want to scroll to it
         * @param {Partial<ISmoothScrollOptions>} options The scrolling options
         */
        SmoothScrollService.prototype.scrollTo = function (element, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
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
            setTimeout(function () {
                _this._timeLapsed = 0;
                _this._startLocation = _this._getScrollLocation();
                _this._endLocation = _this._getEndLocation(element);
                _this._distance = _this._endLocation - _this._startLocation;
                _this._options.callbackBefore(element);
                _this._lastFrameTime = Date.now();
                requestAnimationFrame(function () { return _this._animateScroll(); });
            }, 0);
        };
        /**
         * Retrieve current scroll location
         */
        SmoothScrollService.prototype._getScrollLocation = function () {
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
        };
        /**
         * Calculate easing pattern.
         */
        SmoothScrollService.prototype._getEasingPattern = function (type, time) {
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
        };
        ;
        /**
         * Calculate how far to scroll
         */
        SmoothScrollService.prototype._getEndLocation = function (element) {
            var elementRect = element.getBoundingClientRect(), absoluteElementTop = elementRect.top + window.pageYOffset, location;
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
        };
        ;
        /**
         * Scroll the page by an increment, and check if it's time to stop
         */
        SmoothScrollService.prototype._animateScroll = function () {
            var _this = this;
            var PREVIOUS_FRAME_DURATION = this._lastFrameTime - Date.now();
            this._timeLapsed += PREVIOUS_FRAME_DURATION;
            var PERCENTAGE = this._timeLapsed <= this._options.duration ? this._timeLapsed / this._options.duration : 1;
            this._position = this._startLocation + (this._distance * this._getEasingPattern(this._options.easing, PERCENTAGE));
            if (this._container) {
                this._container.scrollTop = this._position;
            }
            else {
                window.scrollTo(0, this._position);
            }
            var currentLocation = this._getScrollLocation(), scrollHeight = this._container ? this._container.scrollHeight : document.body.scrollHeight, internalHeight = this._container ? this._container.clientHeight + currentLocation : window.innerHeight + currentLocation;
            if (this._position == this._endLocation || currentLocation == this._endLocation || internalHeight > scrollHeight) {
                this._options.callbackAfter(this._element);
            }
            else {
                this._lastFrameTime = Date.now();
                requestAnimationFrame(function () { return _this._animateScroll(); });
            }
        };
        ;
        return SmoothScrollService;
    }());
    SmoothScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmoothScrollService_Factory() { return new SmoothScrollService(); }, token: SmoothScrollService, providedIn: "root" });
    SmoothScrollService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var ScrollDirective = /** @class */ (function () {
        function ScrollDirective(_elementRef, _smoothScrollService) {
            this._elementRef = _elementRef;
            this._smoothScrollService = _smoothScrollService;
            this.options = {};
        }
        ScrollDirective.prototype.onClick = function (target) {
            if (this.scrollOnClick) {
                this.scroll();
            }
        };
        ;
        ScrollDirective.prototype.ngOnInit = function () {
            this.scroll();
        };
        ScrollDirective.prototype.scroll = function () {
            var _this = this;
            if (typeof this.scrollIf === 'undefined' || this.scrollIf === true) {
                setTimeout(function () {
                    _this._smoothScrollService.scrollTo(_this._elementRef.nativeElement, _this.options);
                }, 0);
            }
        };
        return ScrollDirective;
    }());
    ScrollDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[smoothScroll]'
                },] }
    ];
    ScrollDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: SmoothScrollService }
    ]; };
    ScrollDirective.propDecorators = {
        options: [{ type: i0.Input, args: ['options',] }],
        scrollIf: [{ type: i0.Input, args: ['scrollIf',] }],
        scrollOnClick: [{ type: i0.Input, args: ['scrollOnClick',] }],
        onClick: [{ type: i0.HostListener, args: ['click', ['$event.target'],] }]
    };

    var ScrollToDirective = /** @class */ (function () {
        function ScrollToDirective(_smoothScrollService) {
            this._smoothScrollService = _smoothScrollService;
            this.options = {};
        }
        ScrollToDirective.prototype.onClick = function () {
            var TARGET = document.getElementById(this.scrollTo);
            if (!TARGET) {
                return;
            }
            this._smoothScrollService.scrollTo(TARGET, this.options);
        };
        ;
        return ScrollToDirective;
    }());
    ScrollToDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[smoothScrollTo]'
                },] }
    ];
    ScrollToDirective.ctorParameters = function () { return [
        { type: SmoothScrollService }
    ]; };
    ScrollToDirective.propDecorators = {
        scrollTo: [{ type: i0.Input, args: ['scrollTo',] }],
        options: [{ type: i0.Input, args: ['options',] }],
        onClick: [{ type: i0.HostListener, args: ['click',] }]
    };

    var SmoothScrollModule = /** @class */ (function () {
        function SmoothScrollModule() {
        }
        return SmoothScrollModule;
    }());
    SmoothScrollModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [],
                    declarations: [ScrollToDirective, ScrollDirective],
                    exports: [ScrollToDirective, ScrollDirective]
                },] }
    ];

    /*
     * Public API Surface of ngx-smooth-scroll
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ScrollDirective = ScrollDirective;
    exports.ScrollToDirective = ScrollToDirective;
    exports.SmoothScrollModule = SmoothScrollModule;
    exports.SmoothScrollService = SmoothScrollService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-smooth-scroll.umd.js.map
