function solution(number) {
    let multiples = [0];

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i);
        }
    }

    let sumMultiples = multiples.reduce((a, b) => a + b);
    
    return sumMultiples;
}
console.log(solution(10));