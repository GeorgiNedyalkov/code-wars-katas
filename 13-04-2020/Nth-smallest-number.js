function nthSmallest(arr, pos){
    
    let sortedArr = arr.sort((a, b) => a - b);

    return sortedArr[pos-1]   
}

console.log(nthSmallest([3,1,2],2));
console.log(nthSmallest([15,20,7,10,4,3],3));
console.log(nthSmallest([-102,-16,-1,-2,-367,-9],5));