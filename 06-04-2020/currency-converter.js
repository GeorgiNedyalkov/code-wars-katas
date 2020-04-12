
/*  General problem:
    Given an integer (usd) representing the amount of dollars you have and a 
    string (currency) representing the name of the currency used in another country, 
    it is your task to determine the amount of foreign currency you will receive 
    when you exchange your United States Dollars.
*/

// there is a glitch where some countries rates are in binary code rather than decimal values. 
// those currencies beginning with a vowel: 

function convertMyDollars(usd, currency) {    
    
    // use Regular expression to check which countries start with a vowel
    let vowelRegex = '^[aieouAIEOU].*'
    let startsVowel = currency.match(vowelRegex);

        
    let result = usd * CONVERSION_RATES[currency];

    if(!startsVowel) {
        // use a function to convert from binary to decimal
        // The decimal number is equal to the sum of binary digits (dn) times their power of 2 (2n):
        let decimalRate = bin_to_dec(CONVERSION_RATES[currency]);

        result = decimalRate * usd;
        
    } 

    let endMessage = `You now have ${result}, of ${currency}`;
    
    return endMessage;    
}

function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}

CONVERSION_RATES = {
    "Argentinian Peso": 10,
    "Armenian Dram": 478,
    "Bangladeshi Taka": 1010010,
    "Croatian Kuna": 110, 
    "Czech Koruna": 10101,
    "Dominican Peso": 110000,
    "Egyptian Pound": 18,
    "Guatemalan Quetzal": 111,
    "Haitian Gourde": 1000000,
    "Indian Rupee": 63,
    "Japanese Yen": 1101111,
    "Kenyan Shilling": 1100110,
    "Nicaraguan Cordoba": 11111,
    "Norwegian Krone": 1000,
    "Philippine Piso": 110010,
    "Romanian Leu": 100,
    "Samoan Tala": 11, 
    "South Korean Won": 10000100011, 
    "Thai Baht": 100000,
    "Uzbekistani Som": 8333,
    "Venezuelan Bolivar": 1010,
    "Vietnamese Dong": 101100000101101
  }

  console.log(convertMyDollars(7, "Armenian Dram"));
  console.log(convertMyDollars(322, "Armenian Dram"));
  console.log(convertMyDollars(25, "Bangladeshi Taka"));
  console.log(convertMyDollars(730, "Bangladeshi Taka"));
  console.log(convertMyDollars(37, "Croatian Kuna"))
  console.log(convertMyDollars(40, "Croatian Kuna"))
  console.log(convertMyDollars(197, "Czech Koruna"));
  console.log(convertMyDollars(333, "Czech Koruna"));
  console.log(convertMyDollars(768, "Dominican Peso"));
  console.log(convertMyDollars(983, "Dominican Peso"));


  // Conversion rates table



