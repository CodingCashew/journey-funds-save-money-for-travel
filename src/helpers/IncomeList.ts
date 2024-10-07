import { CategoryTotals, IncomeOrExpense } from "../shared/interfaces";

export function getIncomeTotals(income: IncomeOrExpense[]): CategoryTotals {
  if (!income) {
    return {}
  }
  income = income.filter(
    (expense) => expense.incomeOrExpense === "income"
  );
  const categoryExpenses: CategoryTotals = {};

  for (let i = 0; i < income.length; i++) {
    const currentExpense = income[i];
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
