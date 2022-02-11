const budgetInput = document.querySelector("#budget-input");
const budgetBtn = document.querySelector("#budget-btn");
const budget = document.querySelector("#budget");
const expenseInput = document.querySelector("#expense-input");
const expenseBtn = document.querySelector("#expense-btn");
const expense = document.querySelector("#expenses");
const balance = document.querySelector("#balance");
let budgetValue = 0;
let result = 0;
let expenseSum = 0;


budgetBtn.addEventListener('click', AddBudget);
expenseBtn.addEventListener('click', AddExpenses);

function AddBudget()
{
    budgetValue = parseInt(budgetInput.value);
    budget.innerHTML ="$ " + budgetValue;
    budgetInput.value = "";
    result = budgetValue;
    
}

function AddExpenses(){
    expenseSum += parseInt(expenseInput.value);
    console.log(expenseSum);
    expense.innerHTML = "$ " + expenseSum;
    Balance();
}

function Balance(){
    
    result = result - expenseInput.value; 
    console.log(result);
    balance.innerHTML = "$ " + result;
}

