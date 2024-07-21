export interface BudgetCategory {
  [key: string]: number;
}

export interface IncomeOrExpense {
  expenseId: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  satisfaction?: number;
  notes?: string;
  incomeOrExpense: "income" | "expense";
}

export interface User {
  email: string;
  password: string;
  budget?: BudgetCategory[];
  expenses?: IncomeOrExpense[];
}
