function productArray(numbers) {

    let resultArr = [];   

    if (numbers.length === 2) {
        for (let number of numbers) {
            resultArr.unshift(number);
        }
        return resultArr;
    } else {
        let productAllNums = numbers.reduce((a, b) => a * b);

        for (let number of numbers) {
            resultArr.push(productAllNums / number);
        }
        
        return resultArr;
    }    
}


function productArray2(numbers) {
    var productAllNumbers = numbers.reduce((a,b) => a * b);
    return numbers.map(number => productAllNumbers / number);
}


console.log(productArray([12,20]))
console.log(productArray([3,27,4,2]))
