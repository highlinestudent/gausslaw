import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlTokenNode } from '../MmlNode.js';
export declare class MmlMtext extends AbstractMmlTokenNode {
    static defaults: PropertyList;
    texClass: number;
    get kind(): string;
    get isSpacelike(): boolean;
}
