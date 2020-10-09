import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SmoothScrollService } from "../../services/smooth-scroll.service";
export class ScrollDirective {
    constructor(_elementRef, _smoothScrollService) {
        this._elementRef = _elementRef;
        this._smoothScrollService = _smoothScrollService;
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
                this._smoothScrollService.scrollTo(this._elementRef.nativeElement, this.options);
            }, 0);
        }
    }
}
ScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[smoothScroll]'
            },] }
];
ScrollDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SmoothScrollService }
];
ScrollDirective.propDecorators = {
    options: [{ type: Input, args: ['options',] }],
    scrollIf: [{ type: Input, args: ['scrollIf',] }],
    scrollOnClick: [{ type: Input, args: ['scrollOnClick',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL25neC1zbW9vdGgtc2Nyb2xsL3Byb2plY3RzL25neC1zbW9vdGgtc2Nyb2xsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFLekUsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFBc0IsV0FBdUIsRUFDdkIsb0JBQXlDO1FBRHpDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFJN0MsWUFBTyxHQUFrQyxFQUFFLENBQUM7SUFGOUQsQ0FBQztJQU9ELE9BQU8sQ0FBQyxNQUFtQjtRQUV6QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQ3RCO1lBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVLLFFBQVE7UUFFYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLE1BQU07UUFFWixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQ2xFO1lBQ0UsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7O1lBTmtCLFVBQVU7WUFFckIsbUJBQW1COzs7c0JBWXhCLEtBQUssU0FBQyxTQUFTO3VCQUNmLEtBQUssU0FBQyxVQUFVOzRCQUNoQixLQUFLLFNBQUMsZUFBZTtzQkFFckIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJU21vb3RoU2Nyb2xsT3B0aW9uc30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVNtb290aFNjcm9sbE9wdGlvbnNcIjtcbmltcG9ydCB7U21vb3RoU2Nyb2xsU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Ntb290aC1zY3JvbGwuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc21vb3RoU2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0XG57XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9zbW9vdGhTY3JvbGxTZXJ2aWNlOiBTbW9vdGhTY3JvbGxTZXJ2aWNlKVxuICB7XG4gIH1cblxuICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zOiBQYXJ0aWFsPElTbW9vdGhTY3JvbGxPcHRpb25zPiA9IHt9O1xuICBASW5wdXQoJ3Njcm9sbElmJykgc2Nyb2xsSWY6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2Nyb2xsT25DbGljaycpIHNjcm9sbE9uQ2xpY2s6IGJvb2xlYW47XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcbiAgb25DbGljayh0YXJnZXQ6IEV2ZW50VGFyZ2V0KVxuICB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsT25DbGljaylcbiAgICB7XG4gICAgICB0aGlzLnNjcm9sbCgpO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgbmdPbkluaXQoKVxuICB7XG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsKClcbiAge1xuICAgIGlmICh0eXBlb2YgdGhpcy5zY3JvbGxJZiA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5zY3JvbGxJZiA9PT0gdHJ1ZSlcbiAgICB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc21vb3RoU2Nyb2xsU2VydmljZS5zY3JvbGxUbyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==