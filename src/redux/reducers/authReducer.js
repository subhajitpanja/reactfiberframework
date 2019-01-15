import { ACTION_AUTH } from '../actions/index';

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_AUTH.DO_LOGIN:
            state = {
                ...state,
                data: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

export default authReducer
