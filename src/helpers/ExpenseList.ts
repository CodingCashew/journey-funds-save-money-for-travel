import { CategoryTotals, IncomeOrExpense } from "../shared/interfaces";

export function getExpenseTotals(expenses: IncomeOrExpense[]): CategoryTotals {
  expenses = expenses.filter(
    (expense) => expense.incomeOrExpense === "expense"
  );
  const categoryExpenses: CategoryTotals = {};

  for (let i = 0; i < expenses.length; i++) {
    const currentExpense = expenses[i];
    if (categoryExpenses[currentExpense.category]) {
      categoryExpenses[currentExpense.category] += Math.abs(
        currentExpense.amount
      );
    } else {
      categoryExpenses[currentExpense.category] = Math.abs(
        currentExpense.amount
      );
    }
  }

  return categoryExpenses;
}
