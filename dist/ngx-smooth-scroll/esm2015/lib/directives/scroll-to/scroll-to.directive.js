import { Directive, HostListener, Input } from '@angular/core';
import { SmoothScrollService } from "../../services/smooth-scroll.service";
export class ScrollToDirective {
    constructor(_smoothScrollService) {
        this._smoothScrollService = _smoothScrollService;
        this.options = {};
    }
    onClick() {
        const TARGET = document.getElementById(this.scrollTo);
        if (!TARGET) {
            return;
        }
        this._smoothScrollService.scrollTo(TARGET, this.options);
    }
    ;
}
ScrollToDirective.decorators = [
    { type: Directive, args: [{
                selector: '[smoothScrollTo]'
            },] }
];
ScrollToDirective.ctorParameters = () => [
    { type: SmoothScrollService }
];
ScrollToDirective.propDecorators = {
    scrollTo: [{ type: Input, args: ['scrollTo',] }],
    options: [{ type: Input, args: ['options',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL25neC1zbW9vdGgtc2Nyb2xsL3Byb2plY3RzL25neC1zbW9vdGgtc2Nyb2xsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Njcm9sbC10by9zY3JvbGwtdG8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUt6RSxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQXNCLG9CQUF5QztRQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBSzdDLFlBQU8sR0FBa0MsRUFBRSxDQUFDO0lBSDlELENBQUM7SUFNRCxPQUFPO1FBRUwsTUFBTSxNQUFNLEdBQWUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE1BQU0sRUFDWDtZQUNFLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQUEsQ0FBQzs7O1lBeEJILFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7WUFKTyxtQkFBbUI7Ozt1QkFZeEIsS0FBSyxTQUFDLFVBQVU7c0JBQ2hCLEtBQUssU0FBQyxTQUFTO3NCQUVmLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJU21vb3RoU2Nyb2xsT3B0aW9uc30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVNtb290aFNjcm9sbE9wdGlvbnNcIjtcbmltcG9ydCB7U21vb3RoU2Nyb2xsU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Ntb290aC1zY3JvbGwuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc21vb3RoU2Nyb2xsVG9dJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb0RpcmVjdGl2ZVxue1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfc21vb3RoU2Nyb2xsU2VydmljZTogU21vb3RoU2Nyb2xsU2VydmljZSlcbiAge1xuICB9XG5cbiAgQElucHV0KCdzY3JvbGxUbycpIHNjcm9sbFRvOiBzdHJpbmc7XG4gIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM6IFBhcnRpYWw8SVNtb290aFNjcm9sbE9wdGlvbnM+ID0ge307XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKClcbiAge1xuICAgIGNvbnN0IFRBUkdFVDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2Nyb2xsVG8pO1xuXG4gICAgaWYgKCFUQVJHRVQpXG4gICAge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Ntb290aFNjcm9sbFNlcnZpY2Uuc2Nyb2xsVG8oVEFSR0VULCB0aGlzLm9wdGlvbnMpO1xuICB9O1xufVxuIl19