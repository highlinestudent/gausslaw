export interface RetryError extends Error {
    retry: Promise<any>;
}
export declare function handleRetriesFor(code: Function): Promise<unknown>;
export declare function retryAfter(promise: Promise<any>): void;
