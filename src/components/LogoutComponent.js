import React from 'react';
import { startLogOutAction } from '../actions/AuthAction'
import { connect } from 'react-redux';

const LogoutComponent = ({logoutDispatch}) => {
    return (
        <button onClick={logoutDispatch}>Logout</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutDispatch: (e) => { dispatch(startLogOutAction())}
    }
}

export const ConnectedLogoutComponent = connect(undefined, mapDispatchToProps)(LogoutComponent)