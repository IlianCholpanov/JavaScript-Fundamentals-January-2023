function signCheck(numberOne, numberTwo, numberThree) {
    let sign = 'Positive';
    let isNum1Negative = numberOne < 0;
    sign = checkAndChangeSign(sign, isNum1Negative);
    let isNum2Negative = numberTwo < 0;
    sign = checkAndChangeSign(sign, isNum2Negative);
    let isNum3Negative = numberThree < 0;
    sign = checkAndChangeSign(sign, isNum3Negative);
    return sign;

    function checkAndChangeSign(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }
        if (sign === "Positive") {
            sign = "Negative";
        } else {
            sign = "Positive";
        }
        return sign;
    }
}
console.log(signCheck(5, 12, -15));