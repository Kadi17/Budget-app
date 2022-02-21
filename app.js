const budgetInput = document.querySelector("#budget-input");
const budgetBtn = document.querySelector("#budget-btn");
const budget = document.querySelector("#budget");
const expenseInput = document.querySelector("#expense-input");
const expenseBtn = document.querySelector("#expense-btn");
const expense = document.querySelector("#expenses");
const balance = document.querySelector("#balance");
const expensesTitle = document.querySelector("#expenses-title");
const expenseTitleInput = document.querySelector("#expense-title-input");
const expensesValue = document.querySelector("#expenses-value");
const deleteIcon = document.querySelector("#delete-icon")
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
    BalanceColor();
    createExpenditure();
}

function Balance(){
    
    result = result - expenseInput.value; 
    console.log(result);
    balance.innerHTML = "$ " + result.toFixed(2);
}

function BalanceColor(){
    if(result > 0){
        balance.style.color ="#42FF00";
    }
    else if ( result === 0 ){
        balance.style.color ="#FFFFFF";
    }
    else{
        balance.style.color ="#FF0000";
    }
}

function createExpenditure(){


    const valueElement = document.createElement("div");
    valueElement.innerHTML = 
    `<p>${expenseTitleInput.value}</p>`+
    `<p>${expenseInput.value}</p>`+
    `<section><img src="style/icon/pen-to-square-solid.png" alt=""> <img src="style/icon/trash-solid.png" alt=""></section>`;
    expensesValue.appendChild(valueElement);
    


}
