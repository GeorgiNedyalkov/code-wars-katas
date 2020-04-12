function calculate(num1, operation, num2) {

    let result = 0;

    switch(operation) {
        case '+': result = num1 + num2;
        break;
        case '-': result = num1 - num2;
        break;
        case '*': result = num1 * num2;
        break;
        case '/': result = num1 / num2;
        if(num2 === 0) return null;
        break;
        default: 
        return null;        
    }

    return result;     
}

console.log(calculate(3.2, "+", 8));
console.log(calculate(3.2, "-", 8));
console.log(calculate(3.2, "/", 0));
console.log(calculate(3.2, "*", 8));
console.log(calculate(3.2, "*", 8));
console.log(calculate(-3, "w", 0));

