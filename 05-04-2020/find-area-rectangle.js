/*
    Find the area of a rectangle when provided with:
     one diagonal - d - and one side - l of the rectangle. 
        If the input diagonal is less than or equal to the length of the side, 
            return "Not a rectangle". 
        If the resultant area has decimals round it to two places.

        Solution:
        a) we find w given d and l 
        b) we find area A from a)
        c) check to see if it a decimal with % - to limit the places after point to two.
*/

function area(d,l) {    
    if (d <= l) {
        return "Not a rectangle";
    }    

    let w = Math.sqrt(d**2 - l**2);
    let rectangleA = w * l;

    if (rectangleA % 1 != 0) {
        let result =  rectangleA.toFixed(2);
        return +result;
    }

    return rectangleA;
}

// using a ternary operator - ? 
function simpleAreaB(d,l){
    return (d <= l) ? 'Not a rectangle' : +(Math.sqrt(d**2 - l**2) * l).toFixed(2);
}

console.log(area(5, 4));  // 12
console.log(area(10, 6)); // 48
console.log(area(12, 5)); // 54.54
