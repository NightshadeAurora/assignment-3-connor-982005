/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let dayCount = 0;
let totalCost = 0;
let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");
let clear = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.addEventListener("click", () => toggleClick(mon));
tue.addEventListener("click", () => toggleClick(tue));
wed.addEventListener("click", () => toggleClick(wed));
thu.addEventListener("click", () => toggleClick(thu));
fri.addEventListener("click", () => toggleClick(fri));

function toggleClick(dayElement) {
    if (dayElement.classList.contains("clicked")) {
        dayCount -= 1;
        dayElement.classList.remove("clicked");
    }
    else {
        dayCount += 1;
        dayElement.classList.add("clicked");
    }
    calculateCost()
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear.addEventListener("click", clearDays);

function clearDays() {
    let dayList = [mon, tue, wed, thu, fri];
    for (i in dayList) {
        dayList[i].classList.remove("clicked");
    }
    dayCount = 0;
    calculateCost()
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", halfRate);

function halfRate() {
    costPerDay = 20;
    half.classList.add("clicked");
    full.classList.remove("clicked");
    calculateCost()
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", fullRate);

function fullRate() {
    costPerDay = 35;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    calculateCost()
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    totalCost = costPerDay * dayCount;
    document.getElementById("calculated-cost").innerHTML = totalCost;
}