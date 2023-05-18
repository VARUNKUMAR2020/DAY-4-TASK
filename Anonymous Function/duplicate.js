const array = [1, 2, 3, 2, 4, 3, 5, 6, 1, , 5, 8, 8, 9];

//filter-->Returns the elements of an array that meet the condition specified in a callback function.
const uniqueArray = array.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

console.log(uniqueArray);