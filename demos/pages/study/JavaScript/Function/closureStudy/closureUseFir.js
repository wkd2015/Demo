/**
 * Created by wkdwk on 2016/05/08/0008.
 */
//全局变量，test1是全局变量
var test1 = 111;

function outer() {
    alert(test1);
}
outer(); //111
alert(test1); //111

//闭包，test2是局部变量，这是闭包的目的
//我们经常在小范围使用全局变量，这个时候就可以使用闭包来代替。
(function () {
    var test2 = 222;

    function outer() {
        alert(test2);
    }

    function test() {
        alert("测试闭包：" + test2);
    }

    outer(); //222
    test(); //测试闭包：222
})();
alert(test2); //未定义，这里就访问不到test2