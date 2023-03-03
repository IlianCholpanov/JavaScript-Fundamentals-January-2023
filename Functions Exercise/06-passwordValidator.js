function passwordValidator(password) {
    let hasValidLength = validateLength(password);
    let hasValidNonSpecialChar = validateNonSpecialChar(password);
    let hasValidMinTwoNumbers = validateMinTwoNumbers(password);
    printResult(hasValidLength, hasValidNonSpecialChar, hasValidMinTwoNumbers);

    function validateLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function validateNonSpecialChar(text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isAnNumber = checkContainNumber(num);
            let isUpperCase = checkUpperCase(num);
            let isLoweCase = checkLowerCase(num);
            if (!isAnNumber && !isUpperCase && !isLoweCase) {
                return false;
            }
        }
        return true;
    }

    function checkContainNumber(num) {
        return num >= 48 && num <= 57;
    }

    function checkUpperCase(num) {
        return num >= 65 && num <= 90;
    }

    function checkLowerCase(num) {
        return num >= 97 && num <= 122;
    }

    function validateMinTwoNumbers(password) {
        let numCounter = 0;
        for (let ch of password) {
            let isNumber = checkContainNumber(ch.charCodeAt(0));
            if (isNumber) {
                numCounter++;
            }
        }
        return numCounter >= 2;
    }

    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!validSymbol) {
            console.log("Password must consist only of letters and digits");
        }
        if (!validDigit) {
            console.log("Password must have at least 2 digits");
        }
        if (validLength && validSymbol && validDigit) {
            console.log("Password is valid");
        }
    }
}
passwordValidator('logIn');
console.log(`------------------------`);
passwordValidator('MyPass123')
console.log(`------------------------`);
passwordValidator('Pa$s$s')