function specialNumber(number) {

    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let n = i;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(i + ' -> ' + 'True');
        } else {
            console.log(i + ' -> ' + 'False');
        }
    }
}
specialNumber(15)