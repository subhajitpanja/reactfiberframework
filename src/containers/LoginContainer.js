import { connect } from 'react-redux'
import Login from '../components/Auth/Login/Login';
import { doLogin } from '../redux/actions/authAction';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (userData) => {
            dispatch(doLogin(userData))
        }
    }
}

const LoginContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);

export default LoginContainer;

