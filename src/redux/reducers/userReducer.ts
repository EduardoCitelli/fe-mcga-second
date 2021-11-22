import { User } from "../../models/user";
import { UserActionType, ALL_USERS_SUCCESS } from "../types/users/userTypes";


interface UserState {
    users: User[];
    error: string;
}

const defaultState: UserState = {
    users: [],
    error: '',
}

export default function userReducer(state = defaultState, action: UserActionType): UserState {
    switch (action.type) {
        case ALL_USERS_SUCCESS:
            return { users: action.users, error: '' }

        default:
            return state
    }
}