const friend = "BRUTUS"
const shiftValue = 3;


//Step 1 🧩​
//Recall the Latin alphabet variable from the previous exercise.

//Answer 🔑​
const alphabet = "abcdefghijklmnopqrstuvwxyz";


//Step 2 🧩​
//Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
​
//Use a for loop to traverse each letter of the name.
//Remember to handle cases where the shift might go beyond "z".

//Answer 🔑​
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}


//Question 1 🤔
//What advantage does using a loop provide over manually encrypting each letter?

//Answer 🔑
// it allowws you to constantly never run out of the same numbers when you shift the letters.

//Question 2 🤔
//Explain the role of `% alphabet.length` in our loop. How does it aid in the encryption process?

//Answer 🔑
// % loops the letters and starts over aand over till the encryption is over.