// var isOdd = function (x) {
//   if (x % 2 !== 0) {
//     return "true";
//   } else if (x % 2 === 0) {
//     return "false";
//   } else {
//     return "nani";
//   }
// }

// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));
// console.log("black is even: " + isOdd(0));


/* above code is old solution */


let isOdd = function (x) {
  return x % 2 !== 0
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log(isOdd(-20)); // why don't negative numbers work?
console.log(isOdd(0));
console.log(isOdd("shark")); // why doesn't this return NaN/undefined?