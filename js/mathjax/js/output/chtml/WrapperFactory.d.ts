import { CHTML } from '../chtml.js';
import { CommonWrapperFactory } from '../common/WrapperFactory.js';
import { CHTMLWrapper, CHTMLWrapperClass } from './Wrapper.js';
import { CHTMLCharOptions, CHTMLDelimiterData, CHTMLFontData } from './FontData.js';
export declare class CHTMLWrapperFactory<N, T, D> extends CommonWrapperFactory<CHTML<N, T, D>, CHTMLWrapper<N, T, D>, CHTMLWrapperClass<N, T, D>, CHTMLCharOptions, CHTMLDelimiterData, CHTMLFontData> {
    static defaultNodes: {
        [kind: string]: import("./Wrapper.js").Constructor<import("../common/Wrapper.js").AnyWrapper>;
    };
    jax: CHTML<N, T, D>;
}
