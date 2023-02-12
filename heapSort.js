function heapSort(nums) {
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        adjustHeap(nums, nums.length, i);
    }
    for (let j = nums.length - 1; j >= 0; j--) {
        let temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        adjustHeap(nums, j, 0);
    }
}

function adjustHeap(nums, len, i) {
    let temp = nums[i];
    for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
        if (k + 1 < len && nums[k + 1] > nums[k]) {
            k++;
        }
        if (nums[k] > nums[i]) {
            nums[i] = nums[k];
            i = k;
        } else {
            break;
        }
        nums[i] = temp;
    }
}

let arr = [4, 6, 8, 5, 9, -1, 17, 5, 23, 11, 6];
// 对于给定的数组，先以层次遍历的形式构造出一颗二叉树，然后调整树结构，使其满足堆的结构
heapSort(arr);
console.log(arr);
