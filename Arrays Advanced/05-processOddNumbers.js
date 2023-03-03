function processOddNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = Number(arr[i]);
        if (i % 2 !== 0) {
            // let newArr = arr.map(currentNumber => currentNumber * 2);
            // console.log(newArr);
            currentNumber *= 2;
            result.push(currentNumber);
        }
    }
    console.log((result.reverse()).join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);