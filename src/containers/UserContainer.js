import { connect } from 'react-redux'
import Users from '../components/DashBoard/Users/Users';
import { getUsers } from '../redux/actions/usersAction';

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (pageNo) => {
            dispatch(getUsers(pageNo))
        }
    }
}


const UserContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Users);

export default UserContainer;




