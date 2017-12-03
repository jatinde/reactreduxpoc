import React from 'react';
import { connect } from 'react-redux';
import { startLoginAction } from '../actions/AuthAction'

const LoginPage = ( {dispatch} ) => (
    <div>
        <button onClick={ (e) => { dispatch(startLoginAction()) }}>Login</button>  
    </div>
);

export const ConnectedLoginPage = connect()(LoginPage);