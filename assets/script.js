// getting input value
let inputBill = document.getElementById("bill-sum");

// getting input custom tip value
let inputCustomTip = document.getElementById("custom-tip");

function getCustomTipVallue() {
    let customTip = Number(inputCustomTip.value);
    return customTip;
}


// getting all tip-buttons in the list
let listOfButtons = document.querySelectorAll(".tip-button");

let resultForPerson = document.getElementById("output-for-person");
let resultForPeople = document.getElementById("output-for-people");

let totalValue = 0;

// the function to calculate percentage of bill
function getPercentage(tipValue) {
    let billValue = Number(inputBill.value);
    if (tipValue === "5%") {
        res = billValue * 0.05

    } else if (tipValue === "10%") {
        res = billValue * 0.10

    } else if (tipValue === "15%") {
        res = billValue * 0.15

    } else if (tipValue === "25%") {
        res = billValue * 0.25

    } else if (tipValue === "50%") {
        res = billValue * 0.5;
    } else {
        
    }
    totalValue = res.toFixed(2);
    return res;
}

// the function takes value of the clicked button
function onGetPercentageButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let percent = clickedElement.textContent;
    getPercentage(percent);
}


//  the loop for choosing the clicked button and add listener and calculate percentage
for (let i=0; i < listOfButtons.length; i++) {
    let button = listOfButtons[i];
    button.addEventListener("click", onGetPercentageButtonClick);
}


// get input value number of people and show on total-box
numberPeople = document.querySelector("#people-number");

function getNumberPeopleVallue() {
    let number = Number(numberPeople.value);
    console.log(number);

    // the case when entering custom tip value, without choosing a button-tip
    if (totalValue === 0) {
        let billValue = Number(inputBill.value);
        customTip = getCustomTipVallue(); 
        totalValue =  (billValue * Number(customTip)) / 100; // calculating % of bill summ
        resultForPeople.textContent = totalValue.toFixed(2);
    }

    if (number === 0) {
        isZero();

    } else {
        notZero();
        personTip = totalValue / number
        resultForPerson.textContent = "$" + personTip.toFixed(2);
        resultForPeople.textContent = "$" + res.toFixed(2);
        console.log(personTip);
    }
}
numberPeople.addEventListener("keyup", getNumberPeopleVallue);


// RESET button
resetButton = document.getElementById("reset-button");

function onResetButtonClick() {
    inputBill.value = ""
    inputCustomTip.value = "";
    numberPeople.value = "";
    resultForPerson.textContent = "$0.00";
    resultForPeople.textContent = "$0.00";
    totalValue = 0;
    personTip = 0;
}
resetButton.addEventListener("click", onResetButtonClick);


// changing style of an input-box for Number of people
// the function changes style input-box if was tiped 0
function isZero() {
    hiddenText = document.getElementById("hidden-span");

    hiddenText.setAttribute("class", "text-zero-appear");
    numberPeople.setAttribute("class", "zero");
}

function notZero() {
    hiddenText = document.getElementById("hidden-span");

    hiddenText.setAttribute("class", "text-zero-hidden");
    numberPeople.classList.remove("zero");
}
