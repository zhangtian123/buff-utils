const _toString = Object.prototype.toString;

export function isObject(v: any): boolean {
    return v !== null && _toString.call(v) === '[object Object]';
}