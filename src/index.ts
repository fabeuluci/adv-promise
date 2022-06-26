export interface Deferred<T> {
    resolve(value: T): void;
    reject(e: unknown): void;
    promise: Promise<T>;
}

export class PromiseUtils {
    
    static defer<T = unknown>(): Deferred<T> {
        const defer: Partial<Deferred<T>> = {};
        defer.promise = new Promise<T>((resolve, reject) => {
            defer.resolve = resolve;
            defer.reject = reject;
        });
        return <Deferred<T>>defer;
    }
    
    static promisify(func: (callback: (err: unknown) => void) => any): Promise<void>
    static promisify<T>(func: (callback: (err: unknown, result: T) => void) => any): Promise<T>
    static promisify<T>(func: (callback: (err: unknown, result?: T) => void) => any): Promise<T> {
        return new Promise<T>((resolve, reject) => func((err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(<T>result);
            }
        }));
    }
}
