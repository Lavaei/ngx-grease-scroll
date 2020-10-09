import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SmoothScrollService {
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
     * @param {Partial<ISmoothScrollOptions>} options The scrolling options
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
SmoothScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmoothScrollService_Factory() { return new SmoothScrollService(); }, token: SmoothScrollService, providedIn: "root" });
SmoothScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21vb3RoLXNjcm9sbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvbmd4LXNtb290aC1zY3JvbGwvcHJvamVjdHMvbmd4LXNtb290aC1zY3JvbGwvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Ntb290aC1zY3JvbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU96QyxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS1csb0JBQWUsR0FBeUI7WUFDL0MsUUFBUSxFQUFRLEdBQUc7WUFDbkIsTUFBTSxFQUFVLENBQUM7WUFDakIsTUFBTSxFQUFVLGdCQUFnQjtZQUNoQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtZQUMxQixhQUFhLEVBQUcsR0FBRyxFQUFFLENBQUMsSUFBSTtZQUMxQixXQUFXLEVBQUssRUFBRTtZQUNsQixXQUFXLEVBQUssS0FBSztTQUN0QixDQUFDO1FBS1EsZ0JBQVcsR0FBVyxDQUFDLENBQUM7S0EyS25DO0lBbEtDOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsT0FBb0IsRUFBRSxVQUF5QyxFQUFFO1FBRXhFOztXQUVHO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFFeEI7O1dBRUc7UUFDSCxJQUFJLENBQUMsUUFBUSxtQ0FBTyxJQUFJLENBQUMsZUFBZSxHQUFLLE9BQU8sQ0FBQyxDQUFDO1FBRXREOztXQUVHO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFHeEcsNkJBQTZCO1FBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFFZCxJQUFJLENBQUMsV0FBVyxHQUFNLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFRLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU5RCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVqQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBRUQ7O09BRUc7SUFDTyxrQkFBa0I7UUFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7U0FDbEM7YUFFRDtZQUNFLElBQUksTUFBTSxDQUFDLFdBQVcsRUFDdEI7Z0JBQ0UsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQzNCO2lCQUVEO2dCQUNFLE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7YUFDM0M7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLGlCQUFpQixDQUFDLElBQWdCLEVBQUUsSUFBWTtRQUV4RCxRQUFRLElBQUksRUFDWjtZQUNFLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxrQ0FBa0M7WUFDeEQsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztZQUM1RCxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxnREFBZ0Q7WUFDcEgsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsa0NBQWtDO1lBQy9ELEtBQUssY0FBYztnQkFDakIsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7WUFDckUsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtZQUNqSixLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsa0NBQWtDO1lBQ3RFLEtBQUssY0FBYztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsZ0NBQWdDO1lBQzVFLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsZ0RBQWdEO1lBQzdJLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsa0NBQWtDO1lBQzdFLEtBQUssY0FBYztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLGdDQUFnQztZQUNuRixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsZ0RBQWdEO1lBQzdKO2dCQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ08sZUFBZSxDQUFDLE9BQW9CO1FBRTVDLElBQUksV0FBVyxHQUFrQixPQUFPLENBQUMscUJBQXFCLEVBQUUsRUFDNUQsa0JBQWtCLEdBQVcsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUNqRSxRQUFnQixDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQzdCO1lBQ0UsUUFBUSxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pGO2FBRUQ7WUFDRSxRQUFRLEdBQUcsa0JBQWtCLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUN4QjtZQUNFLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDTyxjQUFjO1FBRXRCLE1BQU0sdUJBQXVCLEdBQVUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFeEUsSUFBSSxDQUFDLFdBQVcsSUFBSSx1QkFBdUIsQ0FBQztRQUU1QyxNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUVuSCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ25CO1lBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QzthQUVEO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQzNDLFlBQVksR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQ2xHLGNBQWMsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBR3JJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLGVBQWUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLGNBQWMsR0FBRyxZQUFZLEVBQ2hIO1lBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO2FBRUQ7WUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFBQSxDQUFDOzs7O1lBM0xILFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lTbW9vdGhTY3JvbGxPcHRpb25zfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JU21vb3RoU2Nyb2xsT3B0aW9uc1wiO1xuaW1wb3J0IHtFYXNpbmdUeXBlfSBmcm9tIFwiLi4vdHlwZXMvRWFzaW5nVHlwZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbW9vdGhTY3JvbGxTZXJ2aWNlXG57XG4gIHJlYWRvbmx5IERFRkFVTFRfT1BUSU9OUzogSVNtb290aFNjcm9sbE9wdGlvbnMgPSB7XG4gICAgZHVyYXRpb246ICAgICAgIDgwMCxcbiAgICBvZmZzZXQ6ICAgICAgICAgMCxcbiAgICBlYXNpbmc6ICAgICAgICAgJ2Vhc2VJbk91dFF1YXJ0JyxcbiAgICBjYWxsYmFja0JlZm9yZTogKCkgPT4gbnVsbCxcbiAgICBjYWxsYmFja0FmdGVyOiAgKCkgPT4gbnVsbCxcbiAgICBjb250YWluZXJJRDogICAgJycsXG4gICAgbWlkZGxlQWxpZ246ICAgIGZhbHNlXG4gIH07XG5cbiAgcHJvdGVjdGVkIF9vcHRpb25zOiBJU21vb3RoU2Nyb2xsT3B0aW9ucztcbiAgcHJvdGVjdGVkIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIF9pbnRlcnZhbFJlZjogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RpbWVMYXBzZWQ6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBfcG9zaXRpb246IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9zdGFydExvY2F0aW9uOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfZW5kTG9jYXRpb246IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9kaXN0YW5jZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBfbGFzdEZyYW1lVGltZTpudW1iZXI7XG5cblxuICAvKipcbiAgICogU21vb3RobHkgc2Nyb2xsIHRvIGdpdmVuIGVsZW1lbnQgdXNpbmcgZ2l2ZW4gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHdoaWNoIHlvdSB3YW50IHRvIHNjcm9sbCB0byBpdFxuICAgKiBAcGFyYW0ge1BhcnRpYWw8SVNtb290aFNjcm9sbE9wdGlvbnM+fSBvcHRpb25zIFRoZSBzY3JvbGxpbmcgb3B0aW9uc1xuICAgKi9cbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFBhcnRpYWw8SVNtb290aFNjcm9sbE9wdGlvbnM+ID0ge30pXG4gIHtcbiAgICAvKipcbiAgICAgKiBLZWVwIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICovXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZSBnaXZlbiBkZWZhdWx0IG9wdGlvbnMgYW5kIGdpdmVuIG9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gey4uLnRoaXMuREVGQVVMVF9PUFRJT05TLCAuLi5vcHRpb25zfTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjb250YWluZXIgZWxlbWVudFxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX29wdGlvbnMuY29udGFpbmVySUQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9vcHRpb25zLmNvbnRhaW5lcklEKSA6IG51bGw7XG5cblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHdob2xlIHRoaW5nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHRoaXMuX3RpbWVMYXBzZWQgICAgPSAwO1xuICAgICAgdGhpcy5fc3RhcnRMb2NhdGlvbiA9IHRoaXMuX2dldFNjcm9sbExvY2F0aW9uKCk7XG4gICAgICB0aGlzLl9lbmRMb2NhdGlvbiAgID0gdGhpcy5fZ2V0RW5kTG9jYXRpb24oZWxlbWVudCk7XG4gICAgICB0aGlzLl9kaXN0YW5jZSAgICAgID0gdGhpcy5fZW5kTG9jYXRpb24gLSB0aGlzLl9zdGFydExvY2F0aW9uO1xuXG4gICAgICB0aGlzLl9vcHRpb25zLmNhbGxiYWNrQmVmb3JlKGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9sYXN0RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX2FuaW1hdGVTY3JvbGwoKSk7XG4gICAgfSwgMCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBjdXJyZW50IHNjcm9sbCBsb2NhdGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRTY3JvbGxMb2NhdGlvbigpOiBudW1iZXJcbiAge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KVxuICAgICAge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGVhc2luZyBwYXR0ZXJuLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRFYXNpbmdQYXR0ZXJuKHR5cGU6IEVhc2luZ1R5cGUsIHRpbWU6IG51bWJlcik6IG51bWJlclxuICB7XG4gICAgc3dpdGNoICh0eXBlKVxuICAgIHtcbiAgICAgIGNhc2UgJ2Vhc2VJblF1YWQnOlxuICAgICAgICByZXR1cm4gdGltZSAqIHRpbWU7IC8vIGFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbiAgICAgIGNhc2UgJ2Vhc2VPdXRRdWFkJzpcbiAgICAgICAgcmV0dXJuIHRpbWUgKiAoMiAtIHRpbWUpOyAvLyBkZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuICAgICAgY2FzZSAnZWFzZUluT3V0UXVhZCc6XG4gICAgICAgIHJldHVybiB0aW1lIDwgMC41ID8gMiAqIHRpbWUgKiB0aW1lIDogLTEgKyAoNCAtIDIgKiB0aW1lKSAqIHRpbWU7IC8vIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuICAgICAgY2FzZSAnZWFzZUluQ3ViaWMnOlxuICAgICAgICByZXR1cm4gdGltZSAqIHRpbWUgKiB0aW1lOyAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gICAgICBjYXNlICdlYXNlT3V0Q3ViaWMnOlxuICAgICAgICByZXR1cm4gKC0tdGltZSkgKiB0aW1lICogdGltZSArIDE7IC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gICAgICBjYXNlICdlYXNlSW5PdXRDdWJpYyc6XG4gICAgICAgIHJldHVybiB0aW1lIDwgMC41ID8gNCAqIHRpbWUgKiB0aW1lICogdGltZSA6ICh0aW1lIC0gMSkgKiAoMiAqIHRpbWUgLSAyKSAqICgyICogdGltZSAtIDIpICsgMTsgLy8gYWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG4gICAgICBjYXNlICdlYXNlSW5RdWFydCc6XG4gICAgICAgIHJldHVybiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lOyAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gICAgICBjYXNlICdlYXNlT3V0UXVhcnQnOlxuICAgICAgICByZXR1cm4gMSAtICgtLXRpbWUpICogdGltZSAqIHRpbWUgKiB0aW1lOyAvLyBkZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuICAgICAgY2FzZSAnZWFzZUluT3V0UXVhcnQnOlxuICAgICAgICByZXR1cm4gdGltZSA8IDAuNSA/IDggKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lIDogMSAtIDggKiAoLS10aW1lKSAqIHRpbWUgKiB0aW1lICogdGltZTsgLy8gYWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG4gICAgICBjYXNlICdlYXNlSW5RdWludCc6XG4gICAgICAgIHJldHVybiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZTsgLy8gYWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICAgICAgY2FzZSAnZWFzZU91dFF1aW50JzpcbiAgICAgICAgcmV0dXJuIDEgKyAoLS10aW1lKSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWU7IC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gICAgICBjYXNlICdlYXNlSW5PdXRRdWludCc6XG4gICAgICAgIHJldHVybiB0aW1lIDwgMC41ID8gMTYgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSA6IDEgKyAxNiAqICgtLXRpbWUpICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZTsgLy8gYWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGltZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBob3cgZmFyIHRvIHNjcm9sbFxuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRFbmRMb2NhdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlclxuICB7XG4gICAgbGV0IGVsZW1lbnRSZWN0OiBET01SZWN0ICAgICAgID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgYWJzb2x1dGVFbGVtZW50VG9wOiBudW1iZXIgPSBlbGVtZW50UmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIGxvY2F0aW9uOiBudW1iZXI7XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5taWRkbGVBbGlnbilcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IChhYnNvbHV0ZUVsZW1lbnRUb3AgKyAoZWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyKSkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IGFic29sdXRlRWxlbWVudFRvcDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5vZmZzZXQpXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbiAtIHRoaXMuX29wdGlvbnMub2Zmc2V0O1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heChsb2NhdGlvbiwgMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNjcm9sbCB0aGUgcGFnZSBieSBhbiBpbmNyZW1lbnQsIGFuZCBjaGVjayBpZiBpdCdzIHRpbWUgdG8gc3RvcFxuICAgKi9cbiAgcHJvdGVjdGVkIF9hbmltYXRlU2Nyb2xsKClcbiAge1xuICAgIGNvbnN0IFBSRVZJT1VTX0ZSQU1FX0RVUkFUSU9OOm51bWJlciA9IHRoaXMuX2xhc3RGcmFtZVRpbWUgLSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5fdGltZUxhcHNlZCArPSBQUkVWSU9VU19GUkFNRV9EVVJBVElPTjtcblxuICAgIGNvbnN0IFBFUkNFTlRBR0U6IG51bWJlciA9IHRoaXMuX3RpbWVMYXBzZWQgPD0gdGhpcy5fb3B0aW9ucy5kdXJhdGlvbiA/IHRoaXMuX3RpbWVMYXBzZWQgLyB0aGlzLl9vcHRpb25zLmR1cmF0aW9uIDogMTtcblxuICAgIHRoaXMuX3Bvc2l0aW9uID0gdGhpcy5fc3RhcnRMb2NhdGlvbiArICh0aGlzLl9kaXN0YW5jZSAqIHRoaXMuX2dldEVhc2luZ1BhdHRlcm4odGhpcy5fb3B0aW9ucy5lYXNpbmcsIFBFUkNFTlRBR0UpKTtcblxuICAgIGlmICh0aGlzLl9jb250YWluZXIpXG4gICAge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMuX3Bvc2l0aW9uO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMuX3Bvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudExvY2F0aW9uID0gdGhpcy5fZ2V0U2Nyb2xsTG9jYXRpb24oKSxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9jb250YWluZXIgPyB0aGlzLl9jb250YWluZXIuc2Nyb2xsSGVpZ2h0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGludGVybmFsSGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9jb250YWluZXIgPyB0aGlzLl9jb250YWluZXIuY2xpZW50SGVpZ2h0ICsgY3VycmVudExvY2F0aW9uIDogd2luZG93LmlubmVySGVpZ2h0ICsgY3VycmVudExvY2F0aW9uO1xuXG5cbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT0gdGhpcy5fZW5kTG9jYXRpb24gfHwgY3VycmVudExvY2F0aW9uID09IHRoaXMuX2VuZExvY2F0aW9uIHx8IGludGVybmFsSGVpZ2h0ID4gc2Nyb2xsSGVpZ2h0KVxuICAgIHtcbiAgICAgIHRoaXMuX29wdGlvbnMuY2FsbGJhY2tBZnRlcih0aGlzLl9lbGVtZW50KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuX2xhc3RGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX2FuaW1hdGVTY3JvbGwoKSk7XG4gICAgfVxuICB9O1xuXG59XG4iXX0=