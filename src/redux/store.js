import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from './reducers/authReducer';
import users from './reducers/usersReducer';

export default createStore(
    combineReducers({
        auth,
        users,
        form: formReducer,
        toastr: toastrReducer,
    }),
    {},
    applyMiddleware(thunk, logger)
);
