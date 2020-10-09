import { NgModule } from '@angular/core';
import { ScrollToDirective } from './directives/scroll-to/scroll-to.directive';
import { ScrollDirective } from './directives/scroll/scroll.directive';
export class GreaseScrollModule {
}
GreaseScrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ScrollToDirective, ScrollDirective],
                exports: [ScrollToDirective, ScrollDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlYXNlLXNjcm9sbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9uZ3gtc21vb3RoLXNjcm9sbC9wcm9qZWN0cy9uZ3gtZ3JlYXNlLXNjcm9sbC9zcmMvIiwic291cmNlcyI6WyJsaWIvZ3JlYXNlLXNjcm9sbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFPckUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBTDlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQU8sRUFBRTtnQkFDaEIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2dCQUNsRCxPQUFPLEVBQU8sQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2Nyb2xsVG9EaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9zY3JvbGwtdG8vc2Nyb2xsLXRvLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogICAgICBbXSxcbiAgZGVjbGFyYXRpb25zOiBbU2Nyb2xsVG9EaXJlY3RpdmUsIFNjcm9sbERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6ICAgICAgW1Njcm9sbFRvRGlyZWN0aXZlLCBTY3JvbGxEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEdyZWFzZVNjcm9sbE1vZHVsZVxue1xuXG59XG4iXX0=