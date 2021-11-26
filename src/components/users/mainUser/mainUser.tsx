import { connect } from 'react-redux';
import { bindActionCreators as actionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../../../models/user";
import { AppActions } from "../../../redux/actions/models/actions";
import { deleteUser, getUsers, saveUser } from "../../../redux/actions/userActions";
import { AppState } from "../../../redux/configureStore";
import HeaderUser from '../headerUser/headerUser';
import './mainUser.css';
import ListUsers from '../listUser/listUsers';
import UserForm from '../addUser/addUser';
import SimpleModal from '../../sharedComponents/modal/modal';
import Spinner from '../../sharedComponents/spinner/spinner';
import { useEffect } from 'react';

interface StateProps {
    users: User[];
    loading: boolean;
}

interface DispatchProps {
    requestUsers: () => void;
    saveUsers: (user: User) => void;
    deleteUsers: (id: string) => void;
}

type LinkProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
    users: state.userReducer.users,
    loading: state.apiStatusReducer.loading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    requestUsers: actionCreators(getUsers, dispatch),
    saveUsers: actionCreators(saveUser, dispatch),
    deleteUsers: actionCreators(deleteUser, dispatch),
});

function MainUser(props: LinkProps) {
    useEffect(() => {
        props.requestUsers();
    }, []);

    const { users } = props;

    return (
        <>
            <HeaderUser />

            {
                props.loading ? (<Spinner />) : (
                    <>
                        <SimpleModal
                            buttonColor="primary"
                            text="Create User ➕"
                            title="New User"
                            children={<UserForm addUser={props.saveUsers} />}
                        />
                        <ListUsers
                            users={users}
                            deleteUser={props.deleteUsers}
                            updateUser={props.saveUsers}
                        />
                    </>
                )
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUser);