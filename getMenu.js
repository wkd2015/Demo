/**
 * Created by wkdwk on 2016/05/11/0011.
 */
//于数组中添加项目目录，格式为   ['URL', '名称']
var arr  = [
    ['百度前端学院2016任务',
        ['demos/pages/ife/task0102.html','HTML+CSS简单页面'],
        ['demos/pages/ife/task0103.html','三栏式布局（左右固定中间自适应）'],
        ['demos/pages/ife/task0104.html','居中与定位'],
        ['demos/pages/ife/index.html','More……']
    ],
    ['freeCodeCamp练手Demo',
        ['demos/pages/freeCodeCamp/tributePage.html','简介页面']
    ],
    ['实践验证Demo',
        ['demos/pages/study/boxsizingTest.html','box-sizing属性demo'],
        ['demos/pages/study/zhezhaoPic.html','图片圆形遮罩及动态效果'],
        ['demos/pages/study/isWorkday/index.html','工作日判断']
    ]
];
var list = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (j == 0) {
            list += '<div class="myMenu"><dt class="fMenu">' + arr[i][0] + '</dt><div class="sMenu">';
        } else {
            list += '<dd><a href="' + arr[i][j][0] + '" target="_blank">' + arr[i][j][1] + '</a></dd>';
        }
    }
    list += '</div></div>';
}
list = '<div class="menu"><dl>' + list + '</dl></div>';
document.write(list);