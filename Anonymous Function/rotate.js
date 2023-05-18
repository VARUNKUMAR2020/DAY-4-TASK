const array = [1, 2, 3, 4, 5];
const k = 1;

const rotatedArray = array.concat(array.slice(0, k)).slice(k);

console.log(rotatedArray);