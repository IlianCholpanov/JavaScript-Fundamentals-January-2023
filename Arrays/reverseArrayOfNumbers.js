function reverse(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }
    console.log((arr.reverse()).join(" "));
}
reverse(3, [10, 20, 30, 40, 50])


// function reverse(count, numbers) {
//     let array = [];

//     for (let i = 0; i < count; i++) {
//         array[count - 1 - i] = numbers[i];
//     }
//     console.log(array.join(" "));
// }
// reverse(3, [10, 20, 30, 40, 50])