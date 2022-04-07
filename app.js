const budgetInput = document.querySelector("#budget-input");
const budgetBtn = document.querySelector("#budget-btn");
const budget = document.querySelector("#budget");
const expenseInput = document.querySelector("#expense-input");
const expenseBtn = document.querySelector("#expense-btn");
const expense = document.querySelector("#expenses");
const balance = document.querySelector("#balance");
const expenseTitleInput = document.querySelector("#expense-title-input");
const expensesValue = document.querySelector("#expenses-value");
const valueTd = document.querySelector("#value-td");
const warningElement = document.getElementById("warning");
let deleteBtns;
let valueExpense = 0;
let budgetValue = 0;
let result = 0;
let expenseSum = 0;

budgetBtn.addEventListener("click", AddBudget);
expenseBtn.addEventListener("click", AddExpenses);

function AddBudget() {
  budgetValue = parseInt(budgetInput.value);

  if (!budgetValue) return;

  budget.innerHTML = "$ " + budgetValue;
  budgetInput.value = "";
  result = budgetValue;
}

function AddExpenses() {
  console.log(expenseInput.value);
  if (
    isNaN(parseFloat(expenseInput.value)) === false &&
    parseFloat(expenseInput.value) > 0
  ) {
    expenseSum += parseInt(expenseInput.value);
    expense.innerHTML = "$ " + expenseSum;
    Balance();
    BalanceColor();
    createExpenditure();
  } else {
    console.log("wprowadź wartość");
    warningElement.classList.toggle("show");
    window.setTimeout('warningElement.classList.toggle("show")', 2000);
  }

  deleteBtns = document.querySelectorAll(".delete-btn");
  for (const btn of deleteBtns) {
    btn.addEventListener("click", deleteExpense);
  }
}

function Balance() {
  result = result - expenseInput.value;
  balance.innerHTML = "$ " + result.toFixed(2);
}

function BalanceColor() {
  if (result > 0) {
    balance.style.color = "#42FF00";
  } else if (result === 0) {
    balance.style.color = "#FFFFFF";
  } else {
    balance.style.color = "#FF0000";
  }
}

function createExpenditure() {
  const valueElement = document.createElement("tr");
  valueExpense = expenseInput.value;
  valueElement.innerHTML =
    `<td>${expenseTitleInput.value}</td>` +
    `<td class = "value-td">${valueExpense}</td>` +
    `<td><img src="style/icon/pen-to-square-solid.png" alt="">  <img class="delete-btn" src="style/icon/trash-solid.png" alt=""></td>`;
  expensesValue.appendChild(valueElement);
}

function deleteExpense() {
  //   for (const elem of this.parentElement.parentElement.children) {
  //     if (elem.classList.contains("value-td")) {
  //       console.log(elem.innerText);
  //       break;
  //     }
  //   }

  let cost = parseFloat(this.parentElement.parentElement.children[1].innerText);
  result += cost;
  balance.innerText = "$ " + result;
  expenseSum -= cost;
  expense.innerText = "$ " + expenseSum;
  console.log(expenseSum);
  this.parentElement.parentElement.remove();
  BalanceColor();
}
