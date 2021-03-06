import { HandlerType } from './MapHandler.js';
import Stack from './Stack.js';
import StackItemFactory from './StackItemFactory.js';
import { Tags } from './Tags.js';
import { MmlNode } from '../../core/MmlTree/MmlNode.js';
import { ParseInput, ParseResult } from './Types.js';
import ParseOptions from './ParseOptions.js';
import { StackItem, EnvList } from './StackItem.js';
export default class TexParser {
    private _string;
    configuration: ParseOptions;
    macroCount: number;
    stack: Stack;
    i: number;
    currentCS: string;
    constructor(_string: string, env: EnvList, configuration: ParseOptions);
    get options(): import("../../util/Options.js").OptionList;
    get itemFactory(): StackItemFactory;
    get tags(): Tags;
    set string(str: string);
    get string(): string;
    parse(kind: HandlerType, input: ParseInput): ParseResult;
    lookup(kind: HandlerType, symbol: string): unknown;
    contains(kind: HandlerType, symbol: string): boolean;
    toString(): string;
    Parse(): void;
    Push(arg: StackItem | MmlNode): void;
    PushAll(args: (StackItem | MmlNode)[]): void;
    mml(): MmlNode;
    convertDelimiter(c: string): string;
    nextIsSpace(): RegExpMatchArray;
    GetNext(): string;
    GetCS(): string;
    GetArgument(name: string, noneOK?: boolean): string;
    GetBrackets(name: string, def?: string): string;
    GetDelimiter(name: string, braceOK?: boolean): string;
    GetDimen(name: string): string;
    GetUpTo(name: string, token: string): string;
    ParseArg(name: string): MmlNode;
    ParseUpTo(name: string, token: string): MmlNode;
    GetDelimiterArg(name: string): string;
    GetStar(): boolean;
    create(kind: string, ...rest: any[]): MmlNode;
}
