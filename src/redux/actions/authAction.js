import { ACTION_AUTH } from './index';
import { APP_CONFIG } from '../../constant';
import axios from 'axios';

export function doLogin(data) {
    console.log("data ********", data);
    return dispatch => {
        axios({
            method: 'post',
            url: `${APP_CONFIG.API_BASE_URL}/login`,
            data: data,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': '*' 
            }
        }).then((result) => {
            dispatch({
                type: ACTION_AUTH.DO_LOGIN,
                payload: result.data
            });
        }).catch((error) => {
            dispatch({
                type: ACTION_AUTH.DO_LOGIN,
                payload: error
            });
        });
    }
}
