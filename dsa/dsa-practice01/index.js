function reverse(str) {
  return str.split("").reverse().join("");
}
//
// Path: dsa/dsa-practice01/index.js
const orginalStr = "Hello World!";
const reversedStr = reverse(orginalStr);
console.log(reversedStr); // Output: !dlroW olleH
