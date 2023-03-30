let billSumEl = document.getElementById('bill-sum');
let btns = document.querySelectorAll(".btn-tip");

let inputVal;

billSumEl.addEventListener("input", function (e) {
    inputVal = parseInt(e.target.value);

})


function calculateTipAmount(percentage) {
    return (inputVal * percentage) / 100
};


btns.forEach(function (btn) {
    // Pass in event as an argument
    btn.addEventListener("click", function (event) {
        // Log the event.currentTarget

        percentage = parseInt(event.currentTarget.textContent);

        inputVal = calculateTipAmount(percentage);
        console.log(inputVal);
    });
});




function handleInput() {

}

function displayTotal(value) {

}
