const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//Step 1 🧩​
//Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.

//There's a method to add elements to the beginning of an array.

//Answer 🔑​
guests.unshift("BRUTUS");


//Question 1 🤔​
//How can you verify that "BRUTUS" was added to the beginning of the array?

//Answer 🔑​
//you can check by using guests[0].


//Step 2 🧩​
//A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.

//There's a method to add elements to the end of an array.

//Answer 🔑​
guests.push("AUGUSTUS", "LUCIA");


//Step 3 🧩
//Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.

//- Use the right method to find a specific name in the list and its position.

//Answer 🔑
const spartacusIndex = guests.indexOf("SPARTACUS");


//Question 2 🤔
//What would the value of `spartacusIndex` be if "SPARTACUS" wasn't invited?

//Answer 🔑
//when spartacus isn't invited the indexOf would be -1.


//Step 4 🧩​
//Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.

//Find the index of the guest and use the appropriate method to remove him from the list.

//Answer 🔑​
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);

​
//Step 5 🧩​
//Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.

//Use the appropriate method to get a portion of the array.

//Answer 🔑​
const specialGuests = guests.slice(0, 3);


//Step 6 🧩​
//Caesar decides he wants the guest list in alphabetical order. Sort the array. However, Caesar wants his most honored guest (the one added first) to remain at the top of the list. Can you think of a way to sort the guests but keep the honored ones at the top?

//Answer 🔑​
const honoredGuests = guests.slice(0, 1);
const otherGuests = guests.slice(1);
otherGuests.sort();
const sortedGuests = honoredGuests.concat(otherGuests);