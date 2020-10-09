import { ElementRef, OnInit } from '@angular/core';
import { IGreaseScrollOptions } from "../../interfaces/IGreaseScrollOptions";
import { GreaseScrollService } from "../../services/grease-scroll.service";
export declare class ScrollDirective implements OnInit {
    protected _elementRef: ElementRef;
    protected _greaseScrollService: GreaseScrollService;
    constructor(_elementRef: ElementRef, _greaseScrollService: GreaseScrollService);
    options: Partial<IGreaseScrollOptions>;
    scrollIf: boolean;
    scrollOnClick: boolean;
    onClick(target: EventTarget): void;
    ngOnInit(): void;
    private scroll;
}
