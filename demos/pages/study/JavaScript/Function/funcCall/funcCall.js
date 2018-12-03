//apply,call,caller,callee

/*callee
柯里化：给函数分步传递参数，每次传递参数后部分应用参数，并返回一个更具体的函数接受剩下的参数，
这中间可嵌套多层这样的接受部分参数函数，直至返回最后结果。
因此柯里化的过程是逐步传参，逐步缩小函数的适用范围，逐步求解的过程。
作用：
延迟计算。
参数复用。当在多次调用同一个函数，并且传递的参数绝大多数是相同的，那么该函数可能是一个很好的柯里化候选。
动态创建函数。
*/

var currying = function (fn) {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        Array.prototype.push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
}

var multi = function () {
    var total = 0;
    for (var i = 0, c; c = arguments[i++];) {
        total += c;
    }
    return total;
};
var sum = currying(multi);
sum(100, 200)(300);
sum(400);
console.log(sum());