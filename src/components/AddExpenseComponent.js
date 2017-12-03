import React from 'react';
import { ExpenseFormComponent } from "./ExpenseFormComponent";
import { connect } from 'react-redux';
import { startAddExpenseAction} from "../actions/ExpenseAction";

export const AddExpenseComponent = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseFormComponent onSubmit={(expenses) => {
            props.dispatch(startAddExpenseAction(expenses))
            props.history.push('/');
        }}/>
    </div>
);

export const ConnectedAddExpenseComponent = connect()(AddExpenseComponent);