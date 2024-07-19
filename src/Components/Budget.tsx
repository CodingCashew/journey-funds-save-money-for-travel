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
      <table className="table">
        <thead>
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
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
        aria-label="default input example"
      ></input>
    </div>
  );
}

export default Budget;
