function bubbleSort(array) {//[133,3,5,6,33,7,8]
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) { //每一轮将最终排序元素放到数组尾部
            if (array[j] < array[j + 1]) {
                let _temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = _temp;
            }
        }
    }
    return array;
}
