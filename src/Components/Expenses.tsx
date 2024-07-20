import { useState } from "react";
import { IncomeOrExpense } from "../shared/interfaces";

const dummyData: IncomeOrExpense[] = [
  {
    id: 1,
    category: "Groceries",
    amount: 100,
    notes: "Groceries for the week",
    satisfaction: 5,
    description: "HEB",
    date: new Date("2024-07-19"),
    incomeOrExpense: "expense",
  },
  {
    id: 2,
    category: "Gas",
    amount: 50,
    satisfaction: 4,
    description: "Exxon",
    date: new Date("2024-07-18"),
    notes: "Gas for the week",
    incomeOrExpense: "expense",
  },
  {
    id: 3,
    category: "Entertainment",
    amount: 100,
    satisfaction: 4,
    description: "Alamo Drafthouse",
    date: new Date("2024-07-17"),
    notes: "Movies and dinner",
    incomeOrExpense: "expense",
  },
  {
    id: 4,
    category: "Income",
    amount: 500,
    satisfaction: 5,
    description: "HEB",
    date: new Date("2024-07-16"),
    notes: "Weekly paycheck",
    incomeOrExpense: "income",
  },
];

function Expenses() {
  const [expenses, setExpenses] = useState<IncomeOrExpense[]>(dummyData);

  const [isAddingExpenseOrIncome, setIsAddingExpenseOrIncome] =
    useState<boolean>(false);

  const [newExpenseOrIncome, setNewExpenseOrIncome] = useState<IncomeOrExpense>(
    {
      id: 0,
      category: "",
      amount: 0,
      notes: "",
      satisfaction: 0,
      description: "",
      date: new Date(),
      incomeOrExpense: "expense",
    }
  );

  const handleNewExpense = (e: any) => {
    const { id, value } = e.target;
    setNewExpenseOrIncome((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitNewExpenseOrIncome = () => {
    const newId = expenses.length + 1;
    setNewExpenseOrIncome((prevState) => ({
      ...prevState,
      id: newId,
      date: new Date(newExpenseOrIncome.date),
    }));

    setExpenses((prevState) => [...prevState, newExpenseOrIncome]);

    setIsAddingExpenseOrIncome(false);
  };

  const removeItem = (id: number) => {
    const updatedBudget = expenses.filter((item) => item.id !== id);
    setExpenses(updatedBudget);
  };

  return (
    <div>
      <h1 className="my-5">Expenses and Income</h1>
      <div className="d-flex mw-xs-85 p-4">
        <table className="table responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
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
                <tr key={item.id}>
                  <td>{index + 1}</td>
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
                      onClick={() => removeItem(item.id)}
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
      {!isAddingExpenseOrIncome && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsAddingExpenseOrIncome(true)}
        >
          Add Expense or Income
        </button>
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
