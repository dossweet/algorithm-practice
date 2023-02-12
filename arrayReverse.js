let arr = [0, 1, 2];
let left = 0;
let right = arr.length - 1;
while (left < right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
console.log(arr);
