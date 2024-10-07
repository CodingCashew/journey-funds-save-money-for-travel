// import { useEffect, useState } from "react";

// import { useAccountContext } from "../context/AccountContext";
// import { BudgetCategory } from "../shared/interfaces";

function Savings() {
  // const [budget, setBudget] = useState<BudgetCategory[]>([]);

  // const { user } = useAccountContext();

  // useEffect(() => {
  //   if (user.budget) {
  //     setBudget(user.budget);
  //   }
  // }, [user]);

  // const [isAddingCategory, setIsAddingCategory] = useState<boolean>(false);

  // const [newCategory, setCategory] = useState<string>("");
  // const [newAmount, setAmount] = useState<number>(0);

  // const handleNewCategory = (e: any) => {
  //   setCategory(e.target.value);
  // };

  // const handleNewAmount = (e: any) => {
  //   setAmount(e.target.value);
  // };

  // const handleSubmitNewBudgetItem = () => {
  //   const newBudgetCategory = [newCategory, newAmount];

  //   fetch("/budget", {
  //     method: "POST",
  //     body: JSON.stringify({ newBudgetCategory, email: user.email }),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBudget(JSON.parse(data.budget));
  //       setCategory("");
  //       setAmount(0);
  //     })
  //     .catch((err: any) => {
  //       console.error("error: ", err);
  //     });

  //   setIsAddingCategory(false);
  // };

  // const removeItem = (key: string) => {
  //   const budgetAsArray = Object.entries(budget[0]);

  //   const filteredBudgetArray = budgetAsArray.filter(
  //     ([category, amount]) => category !== key
  //   );

  //   const filteredBudget = [Object.fromEntries(filteredBudgetArray)];

  //   fetch("/budget", {
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       budget: filteredBudget,
  //       email: user.email,
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBudget(filteredBudget);
  //     })
  //     .catch((err: any) => {
  //       console.error("error: ", err);
  //     });
  // };

  // return (
  //   <div>
  //     <h1 className="my-4">My Budget</h1>
  //     <div className="p-4">
  //       <div className="d-flex-col">
  //         <table className="table responsive">
  //           <thead>
  //             <tr>
  //               <th scope="col">Category</th>
  //               <th scope="col">Amount</th>
  //               <th scope="col"></th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {budget.map((item, index) =>
  //               Object.entries(item).map(([key, value]) => (
  //                 <tr key={key + index} className="align-middle">
  //                   <th scope="row">{key}</th>
  //                   <td>${value}</td>
  //                   <td>
  //                     <button
  //                       type="button"
  //                       className="btn btn-outline-danger"
  //                       onClick={() => removeItem(key)}
  //                     >
  //                       Remove
  //                     </button>
  //                   </td>
  //                 </tr>
  //               ))
  //             )}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //     {!isAddingCategory && user.email && (
  //       <button
  //         type="button"
  //         className="btn btn-primary"
  //         onClick={() => setIsAddingCategory(true)}
  //       >
  //         Add Budget Category
  //       </button>
  //     )}
  //     {isAddingCategory === true && (
  //       <div className="d-flex-column">
  //         <div className="d-flex flex-wrap justify-content-center">
  //           <div className="d-flex-column flex-fill m-2">
  //             <label className="form-label">Category Name</label>
  //             <input
  //               className="form-control "
  //               type="text"
  //               placeholder="Category Name"
  //               id="category"
  //               aria-label="budget category"
  //               onChange={handleNewCategory}
  //             ></input>
  //           </div>
  //           <div className="d-flex-column flex-fill m-2">
  //             <label className="form-label">Budget Amount</label>
  //             <input
  //               className="form-control "
  //               type="text"
  //               placeholder="Budget Amount"
  //               id="budget-amount"
  //               aria-label="budget amount"
  //               onChange={handleNewAmount}
  //             ></input>
  //           </div>
  //         </div>
  //         <div className="p-4">
  //           <button
  //             type="button"
  //             className="btn btn-success"
  //             onClick={handleSubmitNewBudgetItem}
  //           >
  //             Submit Category
  //           </button>
  //           <button
  //             type="button"
  //             className="btn btn-outline-secondary mx-2"
  //             onClick={() => setIsAddingCategory(false)}
  //           >
  //             Cancel
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Savings;
