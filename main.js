console.log("Hello!");

const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const equalsButton = document.querySelector('.btn-equals');
const clearButton = document.querySelector('.btn-clear');
const deleteButton = document.querySelector('.btn-delete');
const display = document.querySelector('.display');

let displayData = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // logic that will run when the button is clicked
    const buttonValue = button.getAttribute('data-num');
      displayData += buttonValue;
      display.textContent = displayData;
  })
})

equalsButton.addEventListener('click', () => {
  displayData = eval(displayData);
  display.textContent = displayData;
})

clearButton.addEventListener('click', () => {
  displayData = "";
  display.textContent = displayData;
})

deleteButton.addEventListener('click', () => {
  displayData = displayData.toString().slice(0, -1);
  display.textContent = displayData;
})
