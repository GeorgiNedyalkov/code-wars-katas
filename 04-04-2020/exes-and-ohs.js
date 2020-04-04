function XO(str) {   
    let xAmount = 0;
    let oAmount = 0;
    let same = true;     

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x' || str[i] === 'X') {
            xAmount++;
        } else if (str[i] === 'o' || str[i] === 'O') {
           oAmount++; 
        }         
    }

    return xAmount == oAmount;
}


console.log(XO("ooxx")) // true
console.log(XO("xooxx")) // false
console.log(XO("ooxXm")) // true
console.log(XO("zpzpzpp")) // true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")) // false