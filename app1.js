const inps = document.querySelectorAll(".ang-inp");
const submitButton = document.querySelector("button");
const op = document.querySelector("#output");
// console.log(inps)

function angleCheck() {
    // console.log(inps[0].value, inps[1].value, inps[2].value, );
    var sum = 0;
    for (var i = 0; i < inps.length; i++) {
        sum += Number(inps[i].value);
    }
    sum = Number(sum);
    console.log(sum, typeof(sum))
    if (sum === 180) {
        op.innerText = "yes, the given angles can form a triangle";
    } else {
        op.innerText = "no, the given angles cannot for a triangle";
    }
}

submitButton.addEventListener("click", angleCheck);