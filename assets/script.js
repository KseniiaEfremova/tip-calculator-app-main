let billSumEl = document.getElementById('bill-sum');
let btns = document.querySelectorAll(".btn-tip");

let inputVal;
let inputValperson;

let numberPeople = document.getElementById("people-number");

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


numberPeople.addEventListener("input", function (e) {
    inputValperson = inputVal / parseInt(e.target.value);
    console.log(inputValperson);
})

console.log(inputValperson);


function handleInput() {

}

function displayTotal(value) {

}
