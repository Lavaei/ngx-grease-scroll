import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { GreaseScrollService } from "../../services/grease-scroll.service";
export class ScrollDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL25neC1zbW9vdGgtc2Nyb2xsL3Byb2plY3RzL25neC1ncmVhc2Utc2Nyb2xsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFLekUsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFBc0IsV0FBdUIsRUFDdkIsb0JBQXlDO1FBRHpDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFJN0MsWUFBTyxHQUFrQyxFQUFFLENBQUM7SUFGOUQsQ0FBQztJQU9ELE9BQU8sQ0FBQyxNQUFtQjtRQUV6QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQ3RCO1lBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVLLFFBQVE7UUFFYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLE1BQU07UUFFWixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQ2xFO1lBQ0UsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7OztZQU5rQixVQUFVO1lBRXJCLG1CQUFtQjs7O3NCQVl4QixLQUFLLFNBQUMsU0FBUzt1QkFDZixLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLGVBQWU7c0JBRXJCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUdyZWFzZVNjcm9sbE9wdGlvbnN9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lHcmVhc2VTY3JvbGxPcHRpb25zXCI7XG5pbXBvcnQge0dyZWFzZVNjcm9sbFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ncmVhc2Utc2Nyb2xsLnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Njcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdFxue1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZ3JlYXNlU2Nyb2xsU2VydmljZTogR3JlYXNlU2Nyb2xsU2VydmljZSlcbiAge1xuICB9XG5cbiAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogUGFydGlhbDxJR3JlYXNlU2Nyb2xsT3B0aW9ucz4gPSB7fTtcbiAgQElucHV0KCdzY3JvbGxJZicpIHNjcm9sbElmOiBib29sZWFuO1xuICBASW5wdXQoJ3Njcm9sbE9uQ2xpY2snKSBzY3JvbGxPbkNsaWNrOiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uQ2xpY2sodGFyZ2V0OiBFdmVudFRhcmdldClcbiAge1xuICAgIGlmICh0aGlzLnNjcm9sbE9uQ2xpY2spXG4gICAge1xuICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICB9XG4gIH07XG5cbiAgcHVibGljIG5nT25Jbml0KClcbiAge1xuICAgIHRoaXMuc2Nyb2xsKCk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbCgpXG4gIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuc2Nyb2xsSWYgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuc2Nyb2xsSWYgPT09IHRydWUpXG4gICAge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dyZWFzZVNjcm9sbFNlcnZpY2Uuc2Nyb2xsVG8odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG59XG4iXX0=