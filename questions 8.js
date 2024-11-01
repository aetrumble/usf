const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


//Step 1 🧩​
//Create a function named encryptLetter that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

//Inside the function, find the index of the letter in the alphabet.
//Add the shift value to this index.
//Use the modulus operator to ensure wrapping around the alphabet if necessary.
//Return the encrypted letter.

//Answer 🔑​
function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}


//Step 2 🧩​
//Create a function named encryptMessage that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

//Use a loop to iterate over each letter in the word.
//For each letter, call the encryptLetter function.
//Construct the encrypted message.
//Return the encrypted message.

//Answer 🔑​
function encryptMessage (word, shift)
{
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}


//Step 3 🧩​
//Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

//Inside the function, find the index of the letter in the alphabet.
//Subtract the shift value from this index.
//Use the modulus operator to ensure wrapping around the alphabet if necessary. Remember to handle negative values correctly.
//Return the decrypted letter.

//Answer 🔑​
function decryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}


//Step 4 🧩​
//Create a function named decryptMessage that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.

//Use a loop to iterate over each letter in the word.
//For each letter, call the decryptLetter function.
//Construct the decrypted message.
//Return the decrypted message.

//Answer 🔑​
function decryptMessage (word, shift)
{
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}


//Question 🤔
//If Caesar encrypts the word "BRUTUS" using our `encryptMessage` function and then decrypts the result using our `decryptMessage` function, will he get "BRUTUS" back? Why or why not?

//Answer 🔑
// brutus will be the the same encrypted and decrypted.