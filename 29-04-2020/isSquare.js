function isPerfectSquare(number) {
    let squareRoot = Math.sqrt(number);
    let ceilSquareRoot = Math.ceil(squareRoot);

    let isSquare = squareRoot - ceilSquareRoot === 0; 

    return isSquare;
}

console.log(isPerfectSquare(-1));

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0; 
}

console.log(isSquare(25));