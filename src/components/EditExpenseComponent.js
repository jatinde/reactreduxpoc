import React from 'react';
import {startEditExpenseAction, startRemoveExpenseAction} from "../actions/ExpenseAction";
import { connect } from 'react-redux';
import {ExpenseFormComponent} from "./ExpenseFormComponent";

const EditExpenseComponent = (props) => (
    <div>
        <ExpenseFormComponent expense={props.expense}  onSubmit={(expense) => {
            props.dispatch(startEditExpenseAction({id: props.expense.id, expense}))
            props.history.push('/');
        }}/>
        <button onClick={(e) => {
            props.dispatch(startRemoveExpenseAction({ id: props.expense.id }));
            props.history.push('/');
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((item) => item.id === props.match.params.id)
});

export const ConnectedEditExpenseComponent = connect(mapStateToProps)(EditExpenseComponent);