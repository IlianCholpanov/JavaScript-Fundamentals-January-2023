function condenseArrayToNumber(arr) {
    let currArr = arr;
    while (currArr.length > 1) {
        let condensed = [];
        for (let i = 0; i < currArr.length - 1; i++) {
            let firstElement = currArr[i];
            let secondElement = currArr[i + 1];

            condensed.push(firstElement + secondElement);
        }
        currArr = condensed;

    }
    console.log(currArr.join());
}
condenseArrayToNumber([2, 10, 3])