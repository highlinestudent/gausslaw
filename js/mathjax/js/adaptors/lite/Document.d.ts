import { LiteElement } from './Element.js';
export declare class LiteDocument {
    root: LiteElement;
    head: LiteElement;
    body: LiteElement;
    get kind(): string;
    constructor();
}
