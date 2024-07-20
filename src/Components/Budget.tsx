import { useState } from "react";
import { BudgetCategory } from "../shared/interfaces";

const dummyData: BudgetCategory[] = [
  { Rent: 1000 },
  { Groceries: 200 },
  { Utilities: 100 },
  { Entertainment: 50 },
];

function Budget() {
  const [budget, setBudget] = useState<BudgetCategory[]>(dummyData);

  const [isAddingCategory, setIsAddingCategory] = useState<boolean>(false);

  const [newCategory, setCategory] = useState<string>("");
  const [newAmount, setAmount] = useState<number>(0);

  const handleNewCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleNewAmount = (e: any) => {
    setAmount(e.target.value);
  };

  const handleSubmitNewBudgetItem = () => {
    setBudget((prevState) => [...prevState, { [newCategory]: newAmount }]);

    setIsAddingCategory(false);
  };

  const removeItem = (key: string) => {
    const updatedBudget = budget.filter((item) => !item[key]);
    setBudget(updatedBudget);
  };

  return (
    <div>
      <h1 className="my-4">My Budget</h1>
      <div className="d-flex mw-xs-85 p-4">
        <table className="table responsive">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {budget.map((item, index) =>
              Object.entries(item).map(([key, value]) => (
                <tr key={key + index}>
                  <th scope="row">{key}</th>
                  <td>${value}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => removeItem(key)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isAddingCategory && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsAddingCategory(true)}
        >
          Add Budget Category
        </button>
      )}
      {isAddingCategory === true && (
        <div className="d-flex-column">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Category Name</label>
              <input
                className="form-control "
                type="text"
                placeholder="Category Name"
                id="category"
                aria-label="budget category"
                onChange={handleNewCategory}
              ></input>
            </div>
            <div className="d-flex-column flex-fill m-2">
              <label className="form-label">Budget Amount</label>
              <input
                className="form-control "
                type="text"
                placeholder="Budget Amount"
                id="budget-amount"
                aria-label="budget amount"
                onChange={handleNewAmount}
              ></input>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmitNewBudgetItem}
            >
              Submit Category
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={() => setIsAddingCategory(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Budget;
