import { useEffect, useState } from "react";
import { useAccountContext } from "../context/AccountContext";
import { IncomeOrExpense } from "../shared/interfaces";
import ExpensePieChart from "./PieChart";

function Home() {
  const [expenses, setExpenses] = useState<IncomeOrExpense[]>([]);

  const { user } = useAccountContext();

  useEffect(() => {
    console.log('this should call even when the users expenses change, right? ', user.expenses);
    if (user.expenses) {
      setExpenses(user.expenses);
    }
  }, [user, user.expenses]);

  return (
    <div>
      <h1 className="my-4">Save Money for Travel!</h1>
      <div className="d-flex mw-xs-85 p-4">
        <ExpensePieChart expenses={expenses} />
      </div>
    </div>
  );
}

export default Home;
