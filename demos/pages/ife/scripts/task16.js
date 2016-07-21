window.onload = function() {
    /**
     * aqiData，存储用户输入的空气指数数据
     * 示例格式：
     * aqiData = {
     *    "北京": 90,
     *    "上海": 40
     * };
     */
     //console.log(document.currentScript);
    var aqiData = {};

    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    function addAqiData() {
        var cityName = document.getElementById('aqi-city-input').value.trim();
        var cityValue = document.getElementById('aqi-value-input').value.trim();
        if (!cityName.match(/^[a-zA-Z\u4e00-\u9fa5]+$/)) {
          alert('城市名必须为中英文字符！');
          return;
        }
        if(!cityValue.match(/^[0-9]+$/)){
          alert('必须为整数！');
          return;
        }
        aqiData[cityName] = cityValue;
    }

    /**
     * 渲染aqi-table表格
     */
    function renderAqiList() {
        var html = "";
        for (var i in aqiData) {
            html += '<tr><td>' + i + '</td><td>' + aqiData[i] + '</td><td><button>删除</button></td></tr>';
        }
        html = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>' + html;
        //console.log(html);
        document.getElementById('aqi-table').innerHTML = html;

    }

    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    function addBtnHandle() {
        //console.log('add。。。');
        addAqiData();
        renderAqiList();
    }

    /**
     * 点击各个删除按钮的时候的处理逻辑
     * 获取哪个城市数据被删，删除数据，更新表格显示
     */
    function delBtnHandle(target) {
        // do sth.
        var targetCity = target.parentNode.previousSibling.previousSibling.innerText;
        delete aqiData[targetCity];
        renderAqiList();
    }

    function init() {
        //var self = this;
        document.getElementById('add-btn').addEventListener('click', addBtnHandle);
        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数


        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        document.getElementById('aqi-table').addEventListener('click', function(e) {
            if (e.target.nodeName.toLowerCase() == 'button') {
              ///console.log(e);
                var targetNode = e.target;
                //console.log(targetNode);
                delBtnHandle(targetNode);
            }
        });


        // getElementsByTagName('button').addEventListener('click', function(e) {
        //     var target = e.currentTarget;
        //     self.delBtnHandle(target);
        // });

    }

    init();

};
