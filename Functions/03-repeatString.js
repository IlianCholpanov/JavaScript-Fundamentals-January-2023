function repeatString(str, countN) {
    let arr = [];
    for (let i = 0; i < countN; i++) {
        arr += str;
    }
    console.log(arr);
}
repeatString("String", 10);