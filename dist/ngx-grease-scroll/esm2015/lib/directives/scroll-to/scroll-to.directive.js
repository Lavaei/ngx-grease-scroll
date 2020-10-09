import { Directive, HostListener, Input } from '@angular/core';
import { GreaseScrollService } from "../../services/grease-scroll.service";
export class ScrollToDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL25neC1zbW9vdGgtc2Nyb2xsL3Byb2plY3RzL25neC1ncmVhc2Utc2Nyb2xsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Njcm9sbC10by9zY3JvbGwtdG8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUt6RSxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQXNCLG9CQUF5QztRQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBSzdDLFlBQU8sR0FBa0MsRUFBRSxDQUFDO0lBSDlELENBQUM7SUFNRCxPQUFPO1FBRUwsTUFBTSxNQUFNLEdBQWUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE1BQU0sRUFDWDtZQUNFLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQUEsQ0FBQzs7O1lBeEJILFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7O1lBSk8sbUJBQW1COzs7dUJBWXhCLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsU0FBUztzQkFFZixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUdyZWFzZVNjcm9sbE9wdGlvbnN9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lHcmVhc2VTY3JvbGxPcHRpb25zXCI7XG5pbXBvcnQge0dyZWFzZVNjcm9sbFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ncmVhc2Utc2Nyb2xsLnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Njcm9sbFRvXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9EaXJlY3RpdmVcbntcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2dyZWFzZVNjcm9sbFNlcnZpY2U6IEdyZWFzZVNjcm9sbFNlcnZpY2UpXG4gIHtcbiAgfVxuXG4gIEBJbnB1dCgnc2Nyb2xsVG8nKSBzY3JvbGxUbzogc3RyaW5nO1xuICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zOiBQYXJ0aWFsPElHcmVhc2VTY3JvbGxPcHRpb25zPiA9IHt9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpXG4gIHtcbiAgICBjb25zdCBUQVJHRVQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbFRvKTtcblxuICAgIGlmICghVEFSR0VUKVxuICAgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ncmVhc2VTY3JvbGxTZXJ2aWNlLnNjcm9sbFRvKFRBUkdFVCwgdGhpcy5vcHRpb25zKTtcbiAgfTtcbn1cbiJdfQ==