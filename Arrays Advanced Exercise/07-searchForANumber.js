function searchForANumber(arrayOfNumber, arrayOfActions) {
    let elementsToTake = Number(arrayOfActions[0]);
    let elementsToDelete = Number(arrayOfActions[1]);
    let elementToFind = Number(arrayOfActions[2]);

    arrayOfNumber.splice(elementsToTake);
    let arrayLeft = arrayOfNumber.splice(elementsToDelete);
    let result = searching(arrayLeft, elementToFind);
    function searching(arr, must) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == must) {
                count++;
            }
        }
        return count;
    }
    console.log(`Number ${elementToFind} occurs ${result} times.`);
}
searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
console.log('-----------');
searchForANumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)