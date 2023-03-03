// function addAndSubtract(a, b, c) {
//     let sumOfFirstTwo = a + b;
//     let subtractOfSecondTwo = sumOfFirstTwo - c;
//     return subtractOfSecondTwo

// }
// console.log(addAndSubtract(23, 6, 10));

function addAndSubtract(a, b, c) {
    let sum = sumTwoNums(a, b);
    let subtract = subtractTwoNums(sum, c);
    return subtract;

    function sumTwoNums(a, b) {
        return a + b;
    }

    function subtractTwoNums(a, b) {
        return a - b;
    }
}
console.log(addAndSubtract(23, 6, 10));