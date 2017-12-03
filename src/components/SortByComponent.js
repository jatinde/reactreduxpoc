import React from 'react';
import { connect } from 'react-redux';
import { sortByAmountAction, sortByDateAction} from "../actions/FilterAction";

const  SortByComponent = (props) =>  (
    <div>
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                const sortBy = e.target.value;

                if(sortBy === 'amount') {
                    props.dispatch(sortByAmountAction());
                } else if (sortBy === 'date'){
                    props.dispatch(sortByDateAction());
                }
            }}>
            <option disabled>Select Sorting</option>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => ({
    filters: state.filters
})

export const ConnectedSortByComponent = connect(mapStateToProps)(SortByComponent)