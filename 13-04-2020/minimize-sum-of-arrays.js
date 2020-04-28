function minSum(arr) {
    
    let sum = 0;

    let descendingArray = arr.sort((a, b) => a - b);

    while(descendingArray.length > 0) {
        let biggestInt = descendingArray.pop();
        let smallestInt = descendingArray.shift();

        sum = sum + (biggestInt * smallestInt);        
    }
    
    return sum; 
}



function miniSum(arr) {
    return arr.sort((a,b) => a-b)
              .slice(0, arr.length / 2)
              .reduce((accumulator, current, index) => accumulator += current * arr[ arr.length - index - 1 ], 0)
            
}

console.log(miniSum([12,6,10,26,3,24]));









