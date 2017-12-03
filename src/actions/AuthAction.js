import { firebase, googleAuthProvider} from '../firebase/firebase';
import { LOGIN_ACTION_CONSTANTS } from '../constants/constants';

export const loginAction = (uid) => ({
    type: LOGIN_ACTION_CONSTANTS.LOGIN,
    uid
})
export const startLoginAction = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logoutAction = () => ({
    type: LOGIN_ACTION_CONSTANTS.LOGOUT
})

export const startLogOutAction = () => {
    return () => {
        return firebase.auth().signOut();
    }
}