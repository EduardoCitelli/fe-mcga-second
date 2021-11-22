import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../../../models/user";
import { AppActions } from "../../../redux/actions/models/actions";
import { getUsers } from "../../../redux/actions/userActions";
import { AppState } from "../../../redux/configureStore";
import { Component } from 'react';
import HeaderUser from '../headerUser/headerUser';
import './mainUser.css';

interface Props { }

interface LinkStateProps {
    users: User[];
}

interface LinkDispatchProps {
    boundRequestUsers: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
    users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    boundRequestUsers: bindActionCreators(getUsers, dispatch),
});

class MainUser extends Component<LinkProps> {
    componentDidMount() {
        this.props.boundRequestUsers();
    }

    render() {
        const { users } = this.props;

        return (
            <>
                <HeaderUser />

                <div className="grid">
                    {
                        users.map((user: User) => (
                            <div key={user.id} className="card">
                                <h3>{user.name} - {user.surname}</h3>
                                <p>Username: {user.username}</p>
                                <p>Phone: {user.phone}</p>
                                <p>email: {user.email}</p>
                                <hr />


                            </div>
                        ))
                    }

                </div>

            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUser);