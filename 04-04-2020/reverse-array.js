    // given a random number return an array with the reverse order

function digitize(n) {
    
    // get input and initialize result array
    let number = n.toString();
    let resultArr = [];

    // fill the array
    for (let i = 0; i < number.length; i++) {
        let currentNum = number[i];
        resultArr.push(+currentNum);
    }   

    // reverse the array
    let reversedArr = resultArr.reverse();
    return reversedArr;
  
}

digitize(348597)








