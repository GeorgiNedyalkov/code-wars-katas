/*jshint esversion: 6 */

/* Function the decodes text based on Cesars Algorythm
    Two parameters: 
    - text, 
    - shift => key (number) representing the shift of the letters:
    it can be (+) or (-) for e negative shift
*/

function CaesarCryptoEncode(text, shift) {
    
    let output = '';
    
    if(shift < 0) {
        return CaesarCryptoEncode(text, shift + 26);
    }

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        // if the char is a letter
        if (char.match(/[a-z]/i)) {

            // get its code
            let code = text.charCodeAt(i);

            /// Uppercase letters
			if ((code >= 65) && (code <= 90))
            char = String.fromCharCode(((code - 65 + shift) % 26) + 65);

            // Lowercase letters
            else if ((code >= 97) && (code <= 122))
            char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }

        output += char;
    }  

    if (shift != 0) {
        return output;
    } else {
        return '';
    }
}

console.log(CaesarCryptoEncode("Et tu, Brute?", 3));
console.log(CaesarCryptoEncode("Hw wx, Euxwh?", -3));
