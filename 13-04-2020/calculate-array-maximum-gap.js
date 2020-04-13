function maxGap (numbers){         
    numbers = numbers.sort((a,b) => a - b).reverse();      // sort the array in descending order

    let maximumGap = 0;

    for (let i = 0; i < numbers.length; i++) {             // Loop through the array

        let currentNumber = numbers[i];             
        let nextNumber = numbers[i + 1] 
        
        let difference = currentNumber - nextNumber;       // Fomd the difference

        if(difference > maximumGap) {                      // If it is > max => the new max is the diff
            maximumGap = difference;
            difference = 0;                                // return the difference to 0
        }
    }

    return maximumGap;    
}

function maxGapRefactored(numbers) {
    let sortedNumbers = numbers.sort((a,b) => a - b)
    let difference = sortedNumbers[1] - sortedNumbers[0];

    for (let i = 0; i < sortedNumbers.length; i++) {
        if(sortedNumbers[i + 1] - sortedNumbers[i] > difference) {
            difference = sortedNumbers[i + 1] - sortedNumbers[i];
        }        
    }

    return difference;


    
}

console.log(maxGapRefactored([-7,-42,-809,-14,-12]));