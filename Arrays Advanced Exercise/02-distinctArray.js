function distinctArray(arr) {
    let newArr = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
distinctArray([1, 2, 3, 4]);
console.log('------------');
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])