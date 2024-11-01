//Step 1 🧩
//Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.

//Answer 🔑
const randomDecimal = Math.random();
const range = 33 - 3 + 1;
const randomInRange = randomDecimal * range;
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3;


//Step 2 🧩
//Determine the desired range of numbers for our secret shift value, which is between 3 and 33.

//Answer 🔑
const range = 33 - 3 + 1; // = 31


//Question 1 🤔
//Why did we add 1 to the difference between 33 and 3?

//Answer 🔑
// 1 is added so you have options from 3 to 33.


//Step 3 🧩
//Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.

//Answer 🔑
const randomInRange = randomDecimal * range;


//Question 2 🤔
//How does multiplying `randomDecimal` by `range` help us get a number within our desired range?

//Answer 🔑
// you will multiply the randomdecimal by the ramge to get the desired range.


//Step 4 🧩
//Round down the decimal number obtained in Step 3 to get a whole integer.

//Answer 🔑
const randomInt = Math.floor(randomInRange);


//Question 3 🤔
//Why do we use the Math.floor() function instead of other rounding methods like Math.round()?

//Answer 🔑
// we round to the nearest whole number with math.floor() compared to mthat.round().


//Step 5 🧩
//Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.

//Answer 🔑
const shiftValue = randomInt + 3;


//Question 4 🤔
//How does adding 3 to `randomInt` ensure that our final `shiftValue` is between 3 and 33?

//Answer 🔑
// randomint is between 0 through -1 and by adding 3 it will be between 3 and 33.