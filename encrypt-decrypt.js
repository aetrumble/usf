function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const currentChar = encryptedMessage[i];
    const currentIndex = alphabet.indexOf(currentChar);

    if (currentIndex === -1) {
      // If the character is not in the alphabet, add it directly
      decryptedMessage += currentChar;
    } else {
      const newIndex = (currentIndex - shiftValue + alphabet.length) % alphabet.length;
      decryptedMessage += alphabet[newIndex];
    }
  }

  return decryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const currentChar = encryptedMessage[i];
    const currentIndex = alphabet.indexOf(currentChar);

    if (currentIndex === -1) {
      // If the character is not in the alphabet, add it directly
      decryptedMessage += currentChar;
    } else {
      const newIndex = (currentIndex - shiftValue + alphabet.length) % alphabet.length;
      decryptedMessage += alphabet[newIndex];
    }
  }

  return decryptedMessage;
}

const message = "hello";
const shiftValue = 3;

const encryptedMessage = encrypt(message, shiftValue);
console.log(encryptedMessage); // "khoor"

const decryptedMessage = decrypt(encryptedMessage, shiftValue);
console.log(decryptedMessage); // "hello"
