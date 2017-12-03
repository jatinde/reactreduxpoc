import moment from 'moment'

export const expenseFiterAndSortSubscriptionAction = (expenses, filters) => {
    const filteredExpenses = expenses.filter((expense, index) => {
        let textMatch = false;
        textMatch = (expense.description.toLowerCase().indexOf(filters.text.toLowerCase()) > -1) || (expense.note.toLowerCase().indexOf(filters.text.toLowerCase()) > -1);
        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(moment(expense.createdAt)): true;
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(moment(expense.createdAt)): true;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (filters.sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1;
        } else if (filters.sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        }
        return 0;
    });
    return filteredExpenses;
}