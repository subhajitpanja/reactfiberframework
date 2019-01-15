import { ACTION_USERS } from '.';
import { APP_CONFIG } from '../../constant';
import axios from 'axios';

export function getUsers(pageNo) {
 
    return dispatch => {
        axios({
            method: 'get',
            url: `${APP_CONFIG.API_BASE_URL}/users/?page=${pageNo}`,
            //data: data,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': '*' 
            }
        }).then((result) => {
            dispatch({
                type: ACTION_USERS.GET_ALL_USERS_LIST,
                payload: result.data
            });
        }).catch((error) => {
            dispatch({
                type: ACTION_USERS.GET_ALL_USERS_LIST,
                payload: error
            });
        });
    }
}

