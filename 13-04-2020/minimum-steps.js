function minimumSteps(numbers, value) {

    let sum = 0;
    const sortedNumbers = numbers.sort((a, b) => a - b)

    for (let i = 0; i < sortedNumbers.length; i++) {
        sum += sortedNumbers[i];
        if (sum >= value) {
            return i;
        } 
    }
}

console.log(minimumSteps([4,6,3], 2))                                // 1
console.log(minimumSteps([10, 9, 9, 8], 17))                           // 1
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464))   // 8
