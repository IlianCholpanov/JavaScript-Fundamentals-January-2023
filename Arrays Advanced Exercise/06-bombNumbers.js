function bombNumbers(initialArray, bombNumberArray) {
    let bomb = bombNumberArray[0];
    let power = bombNumberArray[1];
    let index = initialArray.indexOf(bomb);

    while (index > - 1) {
        initialArray.splice(Math.max((index - power), 0), Math.min(power, index));
        index = initialArray.indexOf(bomb);
        initialArray.splice(index, (power + 1));
        index = initialArray.indexOf(bomb);
    }
    function sumOfElements(arr) {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        }
        return sum;
    }
    console.log(sumOfElements(initialArray));
}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)