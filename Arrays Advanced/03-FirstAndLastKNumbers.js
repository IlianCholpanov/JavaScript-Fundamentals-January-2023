function firstAndLastKNumbers(array) {
    let count = array.shift();

    let firstElements = array.slice(0, count);
    let lastElements = array.slice(array.length - count)

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
firstAndLastKNumbers([2,
    7, 8, 9])
console.log('-----------------');
firstAndLastKNumbers([3,
    6, 7, 8, 9])