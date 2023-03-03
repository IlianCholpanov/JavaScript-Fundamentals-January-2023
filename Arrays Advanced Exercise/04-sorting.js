function sorting(array) {
    array.sort((a, b) => a - b);

    let sorted = [];
    while (array.length !== 0) {
        sorted.push(array.pop());
        sorted.push(array.shift());
    }
    console.log(sorted.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('-----------------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])