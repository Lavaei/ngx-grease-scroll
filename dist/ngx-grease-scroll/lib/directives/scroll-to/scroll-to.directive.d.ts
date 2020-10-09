import { IGreaseScrollOptions } from "../../interfaces/IGreaseScrollOptions";
import { GreaseScrollService } from "../../services/grease-scroll.service";
export declare class ScrollToDirective {
    protected _greaseScrollService: GreaseScrollService;
    constructor(_greaseScrollService: GreaseScrollService);
    scrollTo: string;
    options: Partial<IGreaseScrollOptions>;
    onClick(): void;
}
