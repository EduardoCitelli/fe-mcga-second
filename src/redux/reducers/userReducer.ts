import { User } from "../../models/user";
import { UserActionType, ALL_USERS_SUCCESS, GET_USER_SUCCESS, CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS, DELETE_USER_SUCCESS } from "../types/users/userTypes";


interface UsersState {
    users: User[];
    error: string;
}

interface UserState extends UsersState {
    user: User;
}

const defaultState: UsersState = {
    users: [],
    error: '',
}

export default function userReducer(state = defaultState, action: UserActionType): UsersState | UserState {
    switch (action.type) {
        case ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.user
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, { ...action.user }],
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.map(user => user.id === action.user.id ? action.user : user),
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.user.id),
            }

        default:
            return state
    }
}