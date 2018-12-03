/**
/**
 * @name cacheJ
 * @param {function} fn 需要缓存结果的函数
 * @returns {function} func
 */
function cacheJ(fn) {
    let isCallAble = Object.prototype.toString.call(fn) === '[object Function]';
    if (!isCallAble) {
        throw new TypeError("argument is not function type!");
    }
    let cache = {};
    return function () {
        if (arguments.length < 1) {
            throw new TypeError("arguments can not be null or undefined");
        }
        let args = Array.prototype.slice.call(arguments);
        let str = args.join('-');
        cache[str] = cache[str] || fn.apply(fn, arguments);
        return cache[str];
    }
}