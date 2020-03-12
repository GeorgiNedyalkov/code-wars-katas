function accum(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const currentLetter = input[i];
        const count = i + 1;

        for(let j = 0; j < count; j++) {
            if (j == 0) {
            result += currentLetter.toUpperCase();
            } else {
            result += currentLetter.toLowerCase();
          }   
        }       
        if ( i != input.length - 1) {            
            result += '-'
        }
    }    
    return result;
}
