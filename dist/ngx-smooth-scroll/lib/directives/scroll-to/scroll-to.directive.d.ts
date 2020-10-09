import { ISmoothScrollOptions } from "../../interfaces/ISmoothScrollOptions";
import { SmoothScrollService } from "../../services/smooth-scroll.service";
export declare class ScrollToDirective {
    protected _smoothScrollService: SmoothScrollService;
    constructor(_smoothScrollService: SmoothScrollService);
    scrollTo: string;
    options: Partial<ISmoothScrollOptions>;
    onClick(): void;
}
