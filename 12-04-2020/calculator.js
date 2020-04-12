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

console.log(calculator(3.2, "+", 8));
console.log(calculator(3.2, "-", 8));
console.log(calculator(3.2, "/", 0));
console.log(calculator(3.2, "*", 8));
console.log(calculator(3.2, "*", 8));
console.log(calculator(-3, "w", 0));

function calculator(num1, operation, num2) {
    var ops = {
        "+": function(x, y) { return x + y; },
        "-": function(x, y) { return x - y; },
        "*": function(x, y) { return x * y; },
        "/": function(x, y) { return y === 0 ? null : x / y; },
    };
    return(ops[operation] || function() { return null; })(num1, num2);
}