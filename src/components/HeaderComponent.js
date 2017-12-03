import React from 'react';
import { NavLink} from 'react-router-dom';
import { ConnectedLogoutComponent } from './LogoutComponent';
import './Header.css'

export const HeaderComponent = () => (
    <div>
        <p>Expense Book</p>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <ConnectedLogoutComponent />
    </div>
)