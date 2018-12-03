//单例模式
//基本版本
var module = (function MyModule() {
    var _module_name = "module";
    var _arr = [1, 2, 3];
    function showName() {
        console.log(_module_name);
    }
    function showArrItem() {
        console.log(_arr.join(","));
    }
    return {
        showName: showName,
        showArrItem: showArrItem
    };
})();

//现代版本

var NewModule = (function Module() {
    var modules = {};
    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();