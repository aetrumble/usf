const friend = "BRUTUS"
const shiftValue = 3;


//Step 1 🧩
//Store the Latin alphabet in a variable with all letters in lowercase.

//Answer 🔑​
const alphabet = "abcdefghijklmnopqrstuvwxyz";


//Step 2 🧩
//Find the index of the first letter of Ceaser's friend. Store it in a variable.

//- Access the first letter of Ceaser's friend.
//- Ceaser's friend's is given in upper-case, but the alphabet was built in lower-case. Convert the case of the first letter.
//- Use a method on the alphabet to find indexes of given strings.

//Answer 🔑​
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());


//Question 1 🤔
//Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?

//Answer 🔑​
// Javascript counts 0 as 1 and so fourth. so when you use letters it will start 0 as a instead of 1 as a.


//Step 3 🧩
//Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.

//- Once you find the index of the letter, add the shift value to it to find the new index.

//Answer 🔑​
const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];


//Question 2 🤔
//If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?

//Answer 🔑​
// The modulus opterator will use % to wrap around the alphabet and loop and everytime you shift it will roll over to the number for every other letter.


//Step 4 🧩
//Determine the length of the alphabet.

//Use a specific property of strings in JavaScript to get their length.

//Answer 🔑​
const alphabetLength = alphabet.length;

​
//Step 5 🧩
//Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.

//Use the modulus operator to handle wrapping around the alphabet based on its length.

//Answer 🔑​
const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];


//Step 6 🧩
//Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the slice method. (Assume that the encrypted message is "EUXWXV".)

//The slice method extracts a section of a string and returns it as a new string without modifying the original string.
//It accepts two parameters: the starting index (inclusive) and the ending index (exclusive).

//Answer 🔑​
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
