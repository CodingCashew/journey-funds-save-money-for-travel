import React from "react";
import { budgetCategory } from "../shared/interfaces";

const budget: budgetCategory[] = [{ produce: 300 }];

function Budget() {
  return (
    <div>
      <h1 className="mb-5">My Budget</h1>
      {/* Add Budget button shows if budget object doesn't have any length */}

      {/* if adding budget, show the input fields with button at bottom to show more rows */}

      {/* map budget rows */}
      {/* {budget.map((item, index) => (
        <div key={index}>
          Produce: ${item.produce}
        </div>
      ))} */}
      <div className="d-flex mw-xs-85 p-4">
      <table className="table responsive">
        <thead >
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {budget.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>Produce</td>
              <td>${item.produce}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex-column flex-fill m-2">
          <label className="form-label">Category Name</label>
          <input
            className="form-control "
            type="text"
            placeholder="Category Name"
            id="category"
            aria-label="budget category"
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
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Budget;
