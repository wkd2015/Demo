/**
 * Created by wangkaidong on 16/7/18.
 */
window.onload = function () {
    var arr = [
        ['task0102.html', '任务二:零基础HTML及CSS编码(一)', 'http://ife.baidu.com/task/detail?taskId=2'],
        ['task0103.html', '任务三:三栏式布局', 'http://ife.baidu.com/task/detail?taskId=3'],
        ['task0104.html', '任务四:定位和居中问题', 'http://ife.baidu.com/task/detail?taskId=4'],
        ['task0105.html', '任务五:零基础HTML及CSS编码(二)', 'http://ife.baidu.com/task/detail?taskId=5'],
        ['task0108.html', '任务八:响应式网格(栅格化布局)', 'http://ife.baidu.com/task/detail?taskId=5']
    ];
    var lists = "";
    for (var i = 0; i < arr.length; i++) {
        lists += '<li class="task"><div class="taskInfo"><a href="' + arr[i][0] + '" class="taskDemoLink"><div class="taskTitle">' + arr[i][1] +
            '</div></a><a href="' + arr[i][2] + '" class="taskLink"><div class="taskDetail">任务说明</div></a></div></li>';
    }
    lists = '<ul class="taskLists">' + lists + '</ul>';
    document.getElementById('lists').innerHTML = lists;
    console.log('list:' + lists);
};