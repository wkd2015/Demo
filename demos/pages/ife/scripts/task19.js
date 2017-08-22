var btns = document.getElementById('num');
var content = document.getElementById('number');
var targetDiv = document.getElementById('show');
var events = {
    "leftIn": function () {
        var num = content.value;
        if (!/^([1-9]\d|100)$/.test(num)) {
            alert("数字范围为: 10-100");
            return;
        }
        if (targetDiv.children.length == 60) {
            alert("元素数量不能超过60个");
            return;
        }
        var numNode = document.createElement('div');
        numNode.style.width = '10px';
        numNode.style.height = num + 'px';
        targetDiv.insertBefore(numNode, targetDiv.childNodes[0]);
    },
    "rightIn": function () {
        var num = content.value;
        if (!/^([1-9]\d|100)$/.test(num)) {
            alert("数字范围为: 10-100");
            return;
        }
        if (targetDiv.children.length == 60) {
            alert("元素数量不能超过60个");
            return;
        }
        var numNode = document.createElement('div');
        numNode.style.width = '10px';
        numNode.style.height = num + 'px';
        targetDiv.appendChild(numNode);
    },
    "leftOut": function () {
        var target = targetDiv.childNodes[0];
        var targetVal = target.innerText;
        targetDiv.removeChild(target);
        alert(targetVal);
    },
    "rightOut": function () {
        var target = targetDiv.lastChild;
        var targetVal = target.innerText;
        targetDiv.removeChild(target);
        alert(targetVal);
    },
    "delete": function (target) {
        targetDiv.removeChild(target);
    },
    "randomData": function () {
        var lists = [];
        var len = Math.round(Math.random() * 59 + 1);
        for (var i = 0;i < len;i++) {
            lists[i] = Math.round(Math.random() * 90 + 10);
        }
        var html = lists.map(function(item,index,arr){
            var str = '<div style="width: 10px;height: ' + item +'px"></div>';
            return str;
        }).join('');
        targetDiv.innerHTML = html;
    }
};

var sorts = {
    mSort: function () {
        var len = targetDiv.children.length;
        var temp;
        var timer = setInterval(function () {
            if (i < 1) {
                clearInterval(timer);
            } else {
                for (var i = 0; i < len - 1; i++) {
                    for (var j = 0; j < len - 1 - i; j++) {
                        if (targetDiv.children[j].offsetHeight > targetDiv.children[j + 1].offsetHeight) {
                            temp = targetDiv.children[j].offsetHeight;
                            targetDiv.children[j].offsetHeight = targetDiv.children[j + 1].offsetHeight;
                            targetDiv.children[j].style.height = targetDiv.children[j + 1].offsetHeight + 'px';
                            targetDiv.children[j + 1].offsetHeight = temp;
                            targetDiv.children[j + 1].style.height = temp + 'px';
                        }
                    }
                }
            }
        }, 50);
        //while (i > 0) {
        //    for (var j = 0; j < i - 1; j++) {
        //        if (parseInt(targetDiv.children[j].style.height.substring(0, targetDiv.children[j].style.height.length - 2)) > parseInt(targetDiv.children[j + 1].style.height.substring(0, targetDiv.children[j + 1].style.height.length - 2))) {
        //            temp = targetDiv.children[j].offsetHeight;
        //            targetDiv.children[j].style.height = targetDiv.children[j + 1].offsetHeight + 'px';
        //            targetDiv.children[j + 1].style.height = temp;
        //        }
        //        i--;
        //    }
        //}
    }
};

btns.addEventListener('click', function (event) {
    var target = event.target;
    switch (target.id) {
        case "leftIn":
            events.leftIn();
            break;
        case "rightIn":
            events.rightIn();
            break;
        case "leftOut":
            events.leftOut();
            break;
        case "rightOut":
            events.rightOut();
            break;
        case "maoPao":
            sorts.mSort();
            break;
        case "random":
            events.randomData();
            break;
    }
}, false);
targetDiv.addEventListener('click', function (event) {
    var target = event.target;
    events.delete(target);
}, false);