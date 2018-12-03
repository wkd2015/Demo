function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let _tempIndex = Math.floor(array.length / 2);
    let _temp = array.splice(_tempIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < _temp) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([_temp], quickSort(right));
}