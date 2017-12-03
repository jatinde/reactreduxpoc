import moment from "moment";
import {EXPENSE_ACTION_CONSTANTS} from "../constants/constants";
import database from "../firebase/firebase";

export const addExpenseAction = ( payload ) => ({
    type: EXPENSE_ACTION_CONSTANTS.ADD_EXPENSE,
    ...payload
});

export const startAddExpenseAction = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {description =  "", note = "", amount = 0, createdAt= moment.now()} = expenseData;
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses`).push({description, note, amount, createdAt})
            .then((ref) => {
                dispatch(addExpenseAction({id: ref.key, description, note, amount, createdAt}));
            });
    }
}

export const removeExpenseAction = ({ id } ) => ({
    type: EXPENSE_ACTION_CONSTANTS.REMOVE_EXPENSE,
    id
});

export const startRemoveExpenseAction = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpenseAction({id}));
            });
    }
}

export const editExpenseAction = ({id, expense}) => {
    debugger;
    if( id !== undefined && expense !== undefined) {
        return {
            type: EXPENSE_ACTION_CONSTANTS.EDIT_EXPENSE,
            id,
            expense
        }
    }
    else {
        return {
            type: EXPENSE_ACTION_CONSTANTS.EDIT_EXPENSE
        }
    }
}

export const startEditExpenseAction = ({id, expense}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update({...expense})
        .then(() => {
            dispatch(editExpenseAction({id, expense}));
        });
    }
}

export const setExpensesAction = (expenses) => ({
    type: EXPENSE_ACTION_CONSTANTS.SET_EXPENSES,
    expenses
})

export const startSetExpensesAction = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses`)
        .on('value',
            (snapshot) => {
                let expenses = [];
                snapshot.forEach((expense) => {
                    expenses.push({
                        id: expense.key,
                        ...expense.val()
                    })
                })
                dispatch(setExpensesAction(expenses));                
            }, (err) => console.log(err)
            );
    }
}