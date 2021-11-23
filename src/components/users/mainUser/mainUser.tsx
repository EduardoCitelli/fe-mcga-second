import { connect } from 'react-redux';
import { bindActionCreators as actionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../../../models/user";
import { AppActions } from "../../../redux/actions/models/actions";
import { getUsers } from "../../../redux/actions/userActions";
import { AppState } from "../../../redux/configureStore";
import { Component } from 'react';
import HeaderUser from '../headerUser/headerUser';
import './mainUser.css';
import ListUsers from '../listUser/listUsers';

interface StateProps {
    users: User[];
}

interface DispatchProps {
    requestUsers: () => void;
}

type LinkProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
    users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    requestUsers: actionCreators(getUsers, dispatch),
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

                <ListUsers users={users} />
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUser);