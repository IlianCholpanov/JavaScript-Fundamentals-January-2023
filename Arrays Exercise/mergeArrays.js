function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        let valueA = firstArr[i];
        let valueB = secondArr[i];

        if (i % 2 === 0) {
            valueA = Number(valueA);
            valueB = Number(valueB)
        }
        let currentResult = valueA + valueB;
        thirdArr.push(currentResult);
    }
    console.log(thirdArr.join(' - '));
}