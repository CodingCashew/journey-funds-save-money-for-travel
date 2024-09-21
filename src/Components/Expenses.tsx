import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useAccountContext } from "../context/AccountContext";
import { IncomeOrExpense } from "../shared/interfaces";

function Expenses() {
  const [expenses, setExpenses] = useState<IncomeOrExpense[]>([]);

  const { user } = useAccountContext();

  useEffect(() => {
    if (user.expenses) {
      setExpenses(user.expenses);
    }
  }, [user]);

  const [isAddingExpenseOrIncome, setIsAddingExpenseOrIncome] =
    useState<boolean>(false);

  const initialExpenseValues: IncomeOrExpense = {
    expenseId: "",
    category: "",
    amount: 0,
    notes: "",
    satisfaction: 0,
    description: "",
    date: new Date(),
    incomeOrExpense: "expense",
  };

  const [newExpenseOrIncome, setNewExpenseOrIncome] =
    useState<IncomeOrExpense>(initialExpenseValues);

  const handleNewExpense = (e: any) => {
    const { id, value } = e.target;
    setNewExpenseOrIncome({
      ...newExpenseOrIncome,
      [id]: value,
    });
  };

  const handleSubmitNewExpenseOrIncome = () => {
    const formattedNewExpense = {
      ...newExpenseOrIncome,
      expenseId: uuidv4().slice(0, 8),
      date: new Date(newExpenseOrIncome.date),
    };

    setNewExpenseOrIncome(formattedNewExpense);

    const updatedExpenses = [...expenses, formattedNewExpense];

    fetch("/expense", {
      method: "POST",
      body: JSON.stringify({ updatedExpenses, email: user.email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setExpenses(updatedExpenses);
      })
      .catch((err: any) => {
        console.error("error: ", err);
      });
    setNewExpenseOrIncome(initialExpenseValues);
    setIsAddingExpenseOrIncome(false);
  };

  const removeItem = (id: string) => {
    const updatedExpenses = expenses.filter((item) => item.expenseId !== id);

    fetch(`/expense`, {
      method: "DELETE",
      body: JSON.stringify({
        expenses: updatedExpenses,
        email: user.email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setExpenses(updatedExpenses);
      })
      .catch((err: any) => {
        console.error("error: ", err);
      });
  };

  return (
    <div>
      <h1 className="mt-4 mb-3">Expenses and Income</h1>
      <p>{user.email}</p>
      <div className="d-flex mw-xs-85 p-4 justify-content-center">
        <div className="d-flex-col ">
          <table className="table responsive">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Id</th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Notes</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, index) => {
                return (
                  <tr key={index} className="align-middle">
                    {/* <td>{index + 1}</td> */}
                    <td>{item.expenseId}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.notes}</td>
                    <td>
                      {item.incomeOrExpense === "expense" ? "-" : ""}$
                      {item.amount}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => removeItem(item.expenseId)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {!isAddingExpenseOrIncome && user.email && (
        <div className="mb-4">
          <button
            type="button"
            className="btn btn-primary mb-4"
            onClick={() => setIsAddingExpenseOrIncome(true)}
          >
            Add Expense or Income
          </button>
        </div>
      )}
      {isAddingExpenseOrIncome === true && (
        <div className="d-flex-column">
          <div className="mt-4">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="incomeOrExpense"
                value="expense"
                onChange={handleNewExpense}
              ></input>
              <label className="form-check-label">Expense</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="incomeOrExpense"
                value="income"
                onChange={handleNewExpense}
              ></input>
              <label className="form-check-label">Income</label>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Date</label>
              <input
                className="form-control "
                type="date"
                placeholder="MM/DD/YYYY"
                id="date"
                aria-label="date of transaction"
                onChange={handleNewExpense}
              ></input>
            </div>
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Description</label>
              <input
                className="form-control "
                type="text"
                placeholder="Description"
                id="description"
                aria-label="expense or income description"
                onChange={handleNewExpense}
              ></input>
            </div>
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Category</label>
              <input
                className="form-control "
                type="text"
                placeholder="Category"
                id="category"
                aria-label="income or expense category"
                onChange={handleNewExpense}
              ></input>
            </div>
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Notes</label>
              <input
                className="form-control "
                type="text"
                placeholder="Notes"
                id="notes"
                aria-label="notes"
                onChange={handleNewExpense}
              ></input>
            </div>
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Amount</label>
              <input
                className="form-control "
                type="text"
                placeholder="$"
                id="amount"
                aria-label="expense or income amount"
                onChange={handleNewExpense}
              ></input>
            </div>
          </div>
          <div className="d-flex my-2 justify-content-center">
            <button
              type="button"
              className="btn btn-success mx-2"
              onClick={handleSubmitNewExpenseOrIncome}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={() => setIsAddingExpenseOrIncome(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Expenses;
