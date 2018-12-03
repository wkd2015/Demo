/**
 * Created by wkdwk on 2016/05/08/0008.
 */
//快速排序
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var tempIndex = Math.floor(arr.length / 2);
    var temp = arr.splice(tempIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < temp) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([temp], quickSort(right));
};
