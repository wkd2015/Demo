/**
 * Created by wkdwk on 2016/05/11/0011.
 */
//于数组中添加项目目录，格式为   ['URL', '名称']
var arr  = [
    ['单页面制作',
        ['demos/pages/ife/task0102.html','HTML+CSS简单页面']
    ],
    ['网页小插件'

    ]
];
var list = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (j == 0) {
            list += '<div class="myMenu"><dt class="fMenu">' + arr[i][0] + '</dt><div class="sMenu">';
        } else {
            list += '<dd><a href="' + arr[i][j][0] + '" target="_blank">' + j + ")  " + arr[i][j][1] + '</a></dd>';
        }
    }
    list += '</div></div>';
}
list = '<div class="menu"><dl>' + list + '</dl></div>';
document.write(list);