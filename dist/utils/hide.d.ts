import { ElementRef, Renderer } from '@angular/core';
export declare class Hide {
    private _elementRef;
    private _renderer;
    private _prevCondition;
    private _displayStyle;
    constructor(_elementRef: ElementRef, _renderer: Renderer);
    hide: boolean;
    private initDisplayStyle();
}
