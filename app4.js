const sides = document.querySelectorAll(".side");
const submitButton = document.querySelector("button");
const op = document.querySelector("#output");
// console.log(sides)

function calcHype() {
    console.log("clicked")
    var sumOfSides = 1;
    for (let val of sides) {
        sumOfSides *= val.value;
    }

    op.innerText = "Area of triangle is : " + (sumOfSides / 2) + "cm'sq";


}

submitButton.addEventListener("click", calcHype);