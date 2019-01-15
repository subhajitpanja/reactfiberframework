import { ACTION_USERS } from '../actions';

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_USERS.GET_ALL_USERS_LIST:
            state = {
                ...state,
                data: action.payload
            }
        break;
        case ACTION_USERS.GET_SINGLE_USER:
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

export default usersReducer
