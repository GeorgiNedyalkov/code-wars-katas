function maxProduct(numbers, size){
    
    let sum = 1;
    numbers.sort((a, b) => a - b);    
    
    while(size > 0) {
        let biggestElement = numbers.pop();
        sum *= biggestElement;
        size--;
    }

    return sum;
}

function maxProduct2(numbers, size) {
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, n) => acc*n);
}



