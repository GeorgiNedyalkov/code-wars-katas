function arrayLeaders(arr) {

    let leaders = [];
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {

        let currentNumber = arr.shift();
        let sumArrNumbers = arr.reduce((a, b) => a + b, 0);

        if (currentNumber > sumArrNumbers) {
            leaders.push(currentNumber);
        }
    }
    return leaders;
}


console.log(arrayLeaders([1, 2, 3, 4, 0]));



/* function arrLeaders(numbers) {

    let leaders = [];

    for (let i = 0; i < numbers.length; i++) {
        let sum = 0;
        let currentNumber = numbers[i];

        for (let j =i+1; j < numbers.length; j++) {
            sum += numbers[j];
        }

        if (currentNumber > sum) {
            leaders.push(currentNumber);
        }
    }
} */