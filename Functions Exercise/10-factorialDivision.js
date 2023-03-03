function factorialDivision(num1, num2) {
    let firstFactorialNumber = calculateFactorial(num1);
    let secondFactorialNumber = calculateFactorial(num2);

    console.log((firstFactorialNumber / secondFactorialNumber).toFixed(2));

    function calculateFactorial(num) {
        let result = 1;
        for (let i = num; i > 1; i -= 2) {
            result *= i * (i - 1)
        }
        return result;
    }
}
factorialDivision(10, 2)