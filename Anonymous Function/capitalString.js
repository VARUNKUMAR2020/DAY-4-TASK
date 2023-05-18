//Convert all the strings to title caps in a string array

const stringArray = ["hello", "world", "javascript"];

const titleCaseArray = stringArray.map(function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCaseArray);