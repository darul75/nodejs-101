var maximum = 0;

for (var i = 999; i > 99; i--) {
  for (var j = 999; j > 99; j--) {
    var mult = i * j;
    if (isPalindrome(mult + '') && (mult > maximum)) maximum = i * j;
  }
}

console.log(maximum);

// Aux
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
