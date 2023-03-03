function printSum(a, b) {
    let buffNumber = "";
    let sum = 0;
    for (let i = a; i <= b; i++) {
        buffNumber += i + " ";
        sum += i;
    }
    console.log(buffNumber);
    console.log(`Sum: ${sum}`);
}
printSum(5, 10)