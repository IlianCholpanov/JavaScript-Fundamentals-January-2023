function sumDigits(num) {
    let sum = 0;
    while(num > 0){
        let remainder = num % 10;
        sum += remainder;
        num = parseInt(num / 10);
    }
    console.log(sum);
}
sumDigits(245678)