import {EXPENSE_ACTION_CONSTANTS} from "../constants/constants";
import { expensesState} from '../state/ExpenseState'

export const expensesReducer = (state = expensesState, action) => {
    switch (action.type) {
        case EXPENSE_ACTION_CONSTANTS.ADD_EXPENSE:
            const {type, ...expense} = action;
            return [
                ...state,
                {
                    ...expense,
                }
            ]
        case EXPENSE_ACTION_CONSTANTS.REMOVE_EXPENSE:
            return state.filter((expense, index) => expense.id !== action.id)
        case EXPENSE_ACTION_CONSTANTS.EDIT_EXPENSE:
            debugger;
            const editId = action.id !== undefined && action.id;
            const actionExpense = action.expense !== undefined && action.expense;
            let newstate = [];
            if (editId && actionExpense) {
                newstate = state.map((expenseObj, index) => {
                    if (expenseObj.id === editId) {
                        return {...expenseObj, ...actionExpense};
                    } else {
                        return {...expenseObj};
                    }
                });
            }
            return newstate;
        case EXPENSE_ACTION_CONSTANTS.SET_EXPENSES:
            return action.expenses    
        default:
            return state;
    }
}