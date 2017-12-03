import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { NavLink} from 'react-router-dom';

export const  ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <h3>
            <NavLink to={"/edit/"+id} activeClassName="is-active">{description}</NavLink>
        </h3>
        <p>{amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
)


export const ConnectedExpenseListItem = connect()(ExpenseListItem)