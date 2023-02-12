function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    let len = arr.length,
        result = [...arr];
    if (len <= 1) {
        return arr;
    }
    //外层循环，控制趟数，每一次找到一个最大值
    for (let i = 0; i < len - 1; i++) {
        // 内层循环,控制比较的次数，并且判断两个数的大小
        for (let j = 0; j < len - 1 - i; j++) {
            // 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }

    }
    return result;
}
let arr = [18, 62, 31, 88, 50, 92];
console.log(bubbleSort(arr)); // [18, 31, 50, 62, 88, 92]
