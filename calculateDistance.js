// https://edabit.com/challenge/W6H4Bcaiu6svso7vT

// Create a function that takes a string of four numbers.
// These numbers represent two separate points on a graph known as the x - axis(horizontal axis) and y - axis(vertical axis).
// Each number corresponds as follows: "x1, y1, x2, y2".Calculate the distance between x and y.

// Examples
// shortestDistance("1,1,2,1") ➞ 1
// shortestDistance("1,1,3,1") ➞ 2
// shortestDistance("-5,1,3,1") ➞ 8
// shortestDistance("-5,2,3,1") ➞ 8.06

// Notes:
// All floats fixed to 2 decimal places (e.g. 2.34).

function shortestDistance(str) {
  let result = 0;

  // Set an array for the temporary result
  arr = [];
  tempNum = "";

  // Split string into array of numbers by looping str
  for (i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      arr.push(tempNum);
      tempNum = "";
    } else if (i === str.length - 1) {
      tempNum += str[i];
      arr.push(tempNum);
      tempNum = "";
    } else {
      tempNum += str[i];
    }
  }

  // Calculate the distance from two coordinates. Distance = sqrt( (x2 - x1)^2 + (y2 - y1)^2)
  let distance = Math.sqrt(
    Math.pow(parseInt(arr[0]) - parseInt(arr[2]), 2) +
      Math.pow(parseInt(arr[1]) - parseInt(arr[3]), 2)
  );

  result = Math.round(distance * 100) / 100;
  return result;
}

console.log(shortestDistance("-5,1,3,1")); // 8
console.log(shortestDistance("700230,523734,877217,172766"));
