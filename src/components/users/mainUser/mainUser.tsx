import { connect } from 'react-redux';
import { bindActionCreators as actionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../../../models/user";
import { AppActions } from "../../../redux/actions/models/actions";
import { deleteUser, getUsers, saveUser } from "../../../redux/actions/userActions";
import { AppState } from "../../../redux/configureStore";
import { Component } from 'react';
import HeaderUser from '../headerUser/headerUser';
import './mainUser.css';
import ListUsers from '../listUser/listUsers';
import UserForm from '../addUser/addUser';
import SimpleModal from '../../sharedComponents/modal/modal';

interface StateProps {
    users: User[];
}

interface DispatchProps {
    requestUsers: () => void;
    saveUsers: (user: User) => void;
    deleteUsers: (id: string) => void;
}

type LinkProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
    users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    requestUsers: actionCreators(getUsers, dispatch),
    saveUsers: actionCreators(saveUser, dispatch),
    deleteUsers: actionCreators(deleteUser, dispatch),
});

class MainUser extends Component<LinkProps> {
    componentDidMount() {
        this.props.requestUsers();
    }

    render() {
        const { users } = this.props;

        return (
            <>
                <HeaderUser />

                <SimpleModal buttonColor="primary" children={<UserForm addUser={this.props.saveUsers} />} text="Create User +" title="New User" />

                <ListUsers users={users} deleteUser={this.props.deleteUsers} updateUser={this.props.saveUsers}/>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUser);