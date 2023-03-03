function oddAndEvenSum(arr) {
    let newArr = arr.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < newArr.length; i++) {
        let currentNumber = Number(newArr[i]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
console.log(`---------------------------`);
oddAndEvenSum(3495892137259234);