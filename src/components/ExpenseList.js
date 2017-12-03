import React from 'react';
import { connect } from 'react-redux';
import {expenseFiterAndSortSubscriptionAction} from "../subscribedActions/ExpenseFilterAndSortAction";
import {ConnectedExpenseListItem} from "./ExpenseListItem";
import {ConnectedExpenseListFilters} from "./ExpenseListFilters";

const ExpenseList = (props) => (
    <div>
        <ConnectedExpenseListFilters/>
        {(props.expenses.length > 0) && props.expenses.map((expense, index) => (<ConnectedExpenseListItem key={index} {...expense} />))}
    </div>
);

const mapStateToProps = (state) => ({
        expenses: expenseFiterAndSortSubscriptionAction(state.expenses, state.filters),
        filters: state.filters
});


export const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)
