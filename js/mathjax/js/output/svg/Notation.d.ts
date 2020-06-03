import { SVGmenclose } from './Wrappers/menclose.js';
import * as Notation from '../common/Notation.js';
export * from '../common/Notation.js';
export declare type Menclose = SVGmenclose<any, any, any>;
export declare type LineName = Notation.Side | ('vertical' | 'horizontal' | 'up' | 'down');
export declare const computeLineData: {
    [kind: string]: (h: number, d: number, w: number, t: number) => [number, number, number, number];
};
export declare const lineData: (node: Menclose, kind: LineName) => [number, number, number, number];
export declare const RenderLine: <N, T, D>(line: LineName) => Notation.Renderer<SVGmenclose<N, T, D>, N>;
export declare const Border: <N, T, D>(side: "left" | "right" | "bottom" | "top") => Notation.DefPair<SVGmenclose<N, T, D>, N>;
export declare const Border2: <N, T, D>(name: string, side1: "left" | "right" | "bottom" | "top", side2: "left" | "right" | "bottom" | "top") => Notation.DefPair<SVGmenclose<N, T, D>, N>;
export declare const DiagonalStrike: <N, T, D>(name: LineName) => Notation.DefPair<SVGmenclose<N, T, D>, N>;
export declare const DiagonalArrow: <N, T, D>(name: string) => Notation.DefPair<SVGmenclose<N, T, D>, N>;
export declare const Arrow: <N, T, D>(name: string) => Notation.DefPair<SVGmenclose<N, T, D>, N>;
