import { LOGIN_ACTION_CONSTANTS } from "../constants/constants";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ACTION_CONSTANTS.LOGIN:
            return {uid: action.uid};
        case LOGIN_ACTION_CONSTANTS.LOGOUT:
            return {};
        default:    
            return state;    
    }
}