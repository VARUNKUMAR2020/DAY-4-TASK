const array1 = [1, 3, 5];
const array2 = [2, 4];

//concat-->Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const mergedArray = array1.concat(array2);
const sortedArray = mergedArray.sort(function (a, b) {
    return a - b;
});

//formula for finding the median in the array
const median = (sortedArray[Math.floor(sortedArray.length / 2)] + sortedArray[Math.floor((sortedArray.length - 1) / 2)]) / 2;

console.log(median);