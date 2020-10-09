import { ElementRef, OnInit } from '@angular/core';
import { ISmoothScrollOptions } from "../../interfaces/ISmoothScrollOptions";
import { SmoothScrollService } from "../../services/smooth-scroll.service";
export declare class ScrollDirective implements OnInit {
    protected _elementRef: ElementRef;
    protected _smoothScrollService: SmoothScrollService;
    constructor(_elementRef: ElementRef, _smoothScrollService: SmoothScrollService);
    options: Partial<ISmoothScrollOptions>;
    scrollIf: boolean;
    scrollOnClick: boolean;
    onClick(target: EventTarget): void;
    ngOnInit(): void;
    private scroll;
}
