import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesFilter from "./components/Expenses/ExpensesFilter";
const expense = [
  {
    id: "e1",
    title: "chips",
    date: new Date(2021, 2, 28),
    amount: 250,
  },
  {
    id: "e2",
    title: "biscuit",
    date: new Date(2022, 2, 24),
    amount: 300,
  },
  {
    id: "e3",
    title: "choclate",
    date: new Date(2020, 3, 13),
    amount: 345,
  },
];
function App() {
  const [expenses, setExpense] = useState(expense);
  const addExpenseHandler = (expense) => {
    // console.log('in app js')
    // console.log(expense)
    setExpense((prevState) => {
      return [expense, ...prevState];
    });
  };
  // const[expenses,setExpense]=useState(expense)
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpensesFilter> */}

      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
