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
const container = document.querySelector(".container");
const addExpense = document.querySelector(".add-expense");
let deleteBtns;
let editBtns;
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
  container.classList.remove("edit");
  addExpense.classList.remove("edit");
  expenseBtn.innerHTML = "Add Expense";
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

  expenseInput.value = "";
  expenseTitleInput.value = "";
  deleteBtns = document.querySelectorAll(".delete-btn");
  editBtns = document.querySelectorAll(".edit-btn");
  for (const btn of deleteBtns) {
    btn.addEventListener("click", deleteExpense);
  }

  for (const btn of editBtns) {
    btn.addEventListener("click", editExpense);
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
    `<td><img class="edit-btn" src="style/icon/pen-to-square-solid.png" alt="">  <img class="delete-btn" src="style/icon/trash-solid.png" alt=""></td>`;
  expensesValue.appendChild(valueElement);
}

function deleteExpense() {

  let cost = parseFloat(this.parentElement.parentElement.children[1].innerText);
  result += cost;
  balance.innerText = "$ " + result;
  expenseSum -= cost;
  expense.innerText = "$ " + expenseSum;
  console.log(expenseSum);
  this.parentElement.parentElement.remove();
  BalanceColor();
}

function editExpense(){
  let cost = parseFloat(this.parentElement.parentElement.children[1].innerText);
  let title = this.parentElement.parentElement.children[0].innerText;
  result += cost;
  balance.innerText = "$ " + result;
  expenseSum -= cost;
  expense.innerText = "$ " + expenseSum;
  console.log("działa");
  container.classList.toggle("edit");
  addExpense.classList.toggle("edit");
  expenseBtn.innerHTML = "Edit";
  console.log(title);
  expenseInput.value = cost;
  expenseTitleInput.value = title ;
  this.parentElement.parentElement.remove();

}