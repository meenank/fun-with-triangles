const sides = document.querySelectorAll(".side");
const submitButton = document.querySelector("button");
const op = document.querySelector("#output");
// console.log(sides)

function calcHype() {
    console.log("clicked")
    var midsquare = 0;
    for (let val of sides) {
        midsquare += (val.value * val.value);
    }
    console.log(Math.sqrt(midsquare))

    op.innerText = Math.sqrt(midsquare);

    console.log("finished");

}

submitButton.addEventListener("click", calcHype);