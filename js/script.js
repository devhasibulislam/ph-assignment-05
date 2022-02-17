// css alternate style
document.getElementById('first-portion').addEventListener('mouseover', function () {
    document.getElementById('first-portion').style.overflow = 'hidden';
});

document.querySelector('#site-image img').addEventListener('mouseover', function () {
    document.querySelector('#site-image img').style.transition = '1s linear';
    document.querySelector('#site-image img').style.transform = 'scale(1.05)';
});

document.querySelector('#site-image img').addEventListener('mouseout', function () {
    document.querySelector('#site-image img').style.transition = '1s linear';
    document.querySelector('#site-image img').style.transform = 'scale(1)';
});

// attempt all inputs in variables
const incomeInput = document.getElementById('income-input');/* income input */
const foodInput = document.getElementById('food-input');/* food expense input */
const rentInput = document.getElementById('rent-input');/* rent expense input */
const clothInput = document.getElementById('cloth-input');/* clothes expense input */
const saveInput = document.getElementById('save-input');/* savings input */

// attempt all buttons in variables
const calcBtn = document.getElementById('calc-btn');/* calculate expenses */
const saveBtn = document.getElementById('save-btn');/* calculate savings */

// attempt all amounts in variables
const totalExpense = document.getElementsByClassName('price')[0];/* total expenses */
const balance = document.getElementsByClassName('price')[1];/* after expense balance */
const savingAmount = document.getElementsByClassName('price')[2];/* amount of saving balance */
const remainingBalance = document.getElementsByClassName('price')[3];/* amount of remaining balance */

// driver variables
let getFromIncomeInput = 0;
let getFromFoodInput = 0;
let getFromRentInput = 0;
let getFromClothInput = 0;
let getFromSavingInput = 0;

// grab income input to a variable
incomeInput.addEventListener('keyup', function () {
    getFromIncomeInput = parseFloat(incomeInput.value);
});
// grab food input to a variable
foodInput.addEventListener('keyup', function () {
    getFromFoodInput = parseFloat(foodInput.value);
});
// grab rent input to a variable
rentInput.addEventListener('keyup', function () {
    getFromRentInput = parseFloat(rentInput.value);
});
// grab clothes input to a variable
clothInput.addEventListener('keyup', function () {
    getFromClothInput = parseFloat(clothInput.value);
});
// calculate expenses
calcBtn.addEventListener('click', function () {
    if ((getFromFoodInput + getFromRentInput + getFromClothInput) <= getFromIncomeInput) {
        totalExpense.innerText = getFromFoodInput + getFromRentInput + getFromClothInput;
        balance.innerText = getFromIncomeInput - parseFloat(totalExpense.innerText);
    }
});

// grab savings input to a variable
saveInput.addEventListener('keyup', function () {
    getFromSavingInput = parseFloat(saveInput.value);
});
// calculate savings
saveBtn.addEventListener('click', function () {
    savingAmount.innerText = (getFromSavingInput / 100) * getFromIncomeInput;
    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
});
