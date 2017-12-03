import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {RouteComponent, history} from './routes/AppRouter'
import { startSetExpensesAction } from './actions/ExpenseAction'
import {configureStore} from "./store/store";
import { firebase } from './firebase/firebase';
import {loginAction, logoutAction} from './actions/AuthAction'

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(<RouteComponent store={store}/>, document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading expenses data...</p>, document.getElementById('root'));



registerServiceWorker();
 firebase.auth().onAuthStateChanged((user) => {
     if( user ) {
        store.dispatch(loginAction(user.uid))
        store.dispatch(startSetExpensesAction());
        renderApp();
        if(history.location.pathname === '/') {
            history.push("/dashboard");
        }
     } else {
        store.dispatch(logoutAction())
        renderApp();
        history.push("/");
     }
     console.log(store.getState());
 })









