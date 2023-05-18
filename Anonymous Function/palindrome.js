const strings = ["level", "hello", "racecar", "world", "madam","malayalam"];

const palindromes = strings.filter(function (string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
});

console.log(palindromes);