function nXnMatrix(number) {
    let num = "";

    for (let i = 1; i <= number; i++) {
        num += ` ${number}`;
    }
    for (let i = 1; i <= number; i++) {
        console.log(num);
    }
}
nXnMatrix(37)
