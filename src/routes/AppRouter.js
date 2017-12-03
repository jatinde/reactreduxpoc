import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {ConnectedAddExpenseComponent} from "../components/AddExpenseComponent";
import {ConnectedEditExpenseComponent } from "../components/EditExpenseComponent";
import {HelpComponent} from "../components/HelpComponent";
import {NotFoundComponent} from "../components/NotFoundComponent";
import {ExpenseDashboardComponent} from "../components/ExpenseDashboardComponent";
import {ConnectedLoginPage} from "../components/LoginPage";
import {Provider} from "react-redux";
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

export const history = createHistory();

export const RouteComponent = (props) => (
    <Provider {...props}>
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={ConnectedLoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardComponent}/>
                <PrivateRoute path="/create" component={ConnectedAddExpenseComponent}/>
                <PrivateRoute path="/edit/:id" component={ConnectedEditExpenseComponent}/>
                <Route component={NotFoundComponent}/>
            </Switch>
        </div>
    </Router>
    </Provider>
);