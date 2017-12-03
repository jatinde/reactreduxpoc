import React from 'react';
import { connect } from 'react-redux';
import {setTextFilterAction} from "../actions/FilterAction";
import { ConnectedSortByComponent } from './SortByComponent';
import {ConnectedDateRangeComponent} from "./DateRangeComponent";

const ExpenseListFilters = (props) => (
    <div>
        <input type="text"
               value={props.filters.text}
               onChange={(e) => props.dispatch(setTextFilterAction({text: e.target.value})) }
        />
        <ConnectedSortByComponent />
        <ConnectedDateRangeComponent filters={props.filters} />
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

