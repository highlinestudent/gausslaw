import { PropertyList } from '../../Tree/Node.js';
import { AbstractMmlNode } from '../MmlNode.js';
export declare class MmlMerror extends AbstractMmlNode {
    static defaults: PropertyList;
    texClass: number;
    get kind(): string;
    get arity(): number;
    get linebreakContainer(): boolean;
}
