let button5 = document.getElementById("btn-5");
let button10 = document.getElementById("btn-10");
let button15 = document.getElementById("btn-15");
let button25 = document.getElementById("btn-25");
let button50 = document.getElementById("btn-50");

let inputBill = document.getElementById("bill-sum");




function getPercentage(tipValue) {
    let billValue = Number(inputBill.value);
    if (tipValue === "5%") {
        res = billValue * 0.05
        console.log(res);

    } else if (tipValue === "10%") {
        res = billValue * 0.10
        console.log(res);

    } else if (tipValue === "15%") {
        res = billValue * 0.15
        console.log(res);

    } else if (tipValue === "25%") {
        res = billValue * 0.25
        console.log(res);

    } else if (tipValue === "50%") {
        res = billValue * 0.5;
        console.log(res);
    } else {

    }
}


function onGetPercentageButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let percent = clickedElement.textContent;
    getPercentage(percent);
}



button5.addEventListener("click", onGetPercentageButtonClick);
button10.addEventListener("click", onGetPercentageButtonClick);
button15.addEventListener("click", onGetPercentageButtonClick);
button25.addEventListener("click", onGetPercentageButtonClick);
button50.addEventListener("click", onGetPercentageButtonClick);

















// let billSumEl = document.getElementById('bill-sum');
// let btns = document.querySelectorAll(".btn-tip");

// let inputVal;
// let inputValperson;

// let numberPeople = document.getElementById("people-number");
// let tipAmount = document.getElementById("output-for-person");
// let totalSum = document.getElementById("output-for-people");


// // getting value fron input field
// billSumEl.addEventListener("input", function (e) {
//     inputVal = parseInt(e.target.value);
// })


// // creating a function to calculate percentage
// function calculateTipAmount(percentage) {
    
//     return (inputVal * percentage) / 100
// };


// // calculating percentage after clicking a button

// btns.forEach(function (btn) {

//     btn.addEventListener("click", function (event) {
//         percentage = parseInt(event.currentTarget.textContent);

//         inputVal = calculateTipAmount(percentage);
//         console.log(inputVal);
//     });

// });


// // dividing the sum for one person
// numberPeople.addEventListener("input", function (e) {
//     inputValperson = inputVal / parseInt(e.target.value);

//     displayTotal(inputValperson);
//     displayTotalPerPerson(inputVal);
   
// })

// function displayTotal(value) {
//     console.log('hello')
//    totalSum.textContent = value;
// }


// function displayTotalPerPerson(value) {
//     tipAmount.textContent = value;
// }


