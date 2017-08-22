/**
 * Created by wangkaidong on 16/7/18.
 */
window.onload = function () {

    var arr = [
        ['../ife/task0102.html', '任务二:零基础HTML及CSS编码(一)', 'http://ife.baidu.com/task/detail?taskId=2'],
        ['../ife/task0103.html', '任务三:三栏式布局', 'http://ife.baidu.com/task/detail?taskId=3'],
        ['../ife/task0104.html', '任务四:定位和居中问题', 'http://ife.baidu.com/task/detail?taskId=4'],
        ['../ife/task0105.html', '任务五:零基础HTML及CSS编码(二)', 'http://ife.baidu.com/task/detail?taskId=5'],
        ['../ife/task0108.html', '任务八:响应式网格(栅格化布局)', 'http://ife.baidu.com/task/detail?taskId=8'],
        ['../ife/task0201.html', '任务十三：零基础JavaScript编码(一)', 'http://ife.baidu.com/task/detail?taskId=13'],
        ['../ife/task14.html', '任务十四：零基础JavaScript编码(二)', 'http://ife.baidu.com/task/detail?taskId=14'],
        ['../ife/task15.html', '任务十五：零基础JavaScript编码(三)', 'http://ife.baidu.com/task/detail?taskId=15'],
        ['../ife/task16.html', '任务十六：零基础JavaScript编码(四)', 'http://ife.baidu.com/task/detail?taskId=16'],
        ['../ife/task18.html', '任务十八：基础JavaScript练习(一)', 'http://ife.baidu.com/task/detail?taskId=18'],
        ['../ife/task19.html', '任务十九：基础JavaScript练习(二)', 'http://ife.baidu.com/task/detail?taskId=19']
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