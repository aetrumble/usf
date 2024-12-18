<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>

Step 1
Select the section with an id of container without using querySelector.

Answer
document.getElementById("container");


Step 2
Select the section with an id of container using querySelector.

Answer
document.querySelector("#container")
​

Step 3
Select all of the list items with a class of “second”.

Answer
document.getElementsByClassName("second") or document.querySelectorAll(".second")
​

Step 4
Select a list item with a class of third, but only the list item inside of the ol tag.

Answer
document.querySelector("ol .third");
​

Step 5
Give the section with an id of container the text “Hello!”.

Answer
let foundDiv = document.querySelector("#container");
foundDiv.innerText = "Hello";
​

Step 6
Add the class main to the div with a class of footer.

Answer
let footer = document.querySelector(".footer");
footer.classList.add("main"); 
OR
footer.className += "main";
​

Step 7
Remove the class main on the div with a class of footer.

Answer
let footer = document.querySelector(".footer");
footer.classList.remove("main");
​

Step 8​
Create a new li element.

Answer
let newLi = document.createElement("li");
​

Step 9
Give the li the text “four”.

Answer
newLi.innerText = "four"
​

Step 10
Append the li to the ul element.

Answer
let list = document.querySelector("ul");
list.appendChild(newLi);
​

Step 11
Loop over all of the lis inside the ol tag and give them a background color of “green”.

Answer
let liInsideOl = document.querySelectorAll("ol li");
for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}
​

Step 12
Remove the div with a class of footer.

Answer
let footer = document.querySelector(".footer");
footer.remove();