var isOdd = function (x) {
  if (x % 2 !== 0) {
    return "true";
  } else if (x % 2 === 0) {
    return "false";
  } else {
    return "nani";
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("black is even: " + isOdd(0));