function getFullBudgetObject(income, expenses) {
  return {
    income,
    expenses,
    getTotalBudget() {
      return this.income - this.expenses;
    },
    getSummary() {
      return `Income: ${this.income}, Expenses: ${this.expenses}, Total Budget: ${this.getTotalBudget()}`;
    },
  };
}
