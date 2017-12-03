import {combineReducers, createStore, applyMiddleware, compose } from "redux";
import {expensesReducer} from "../reducers/ExpensesReducer";
import {filtersReducer} from "../reducers/FilterReducer";
import AuthReducer from '../reducers/AuthReducer'
import thunk from 'redux-thunk';

export const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: AuthReducer
    }), composeEnhancers(applyMiddleware(thunk)));
}