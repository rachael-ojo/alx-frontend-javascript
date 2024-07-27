function getFullBudgetObject(income, expenses) {
    return {
        income: income,
        expenses: expenses,
        getTotalBudget: function() {
            return this.income - this.expenses;
        },
        getSummary: function() {
            return `Income: ${this.income}, Expenses: ${this.expenses}, Total Budget: ${this.getTotalBudget()}`;
        }
    };
}
