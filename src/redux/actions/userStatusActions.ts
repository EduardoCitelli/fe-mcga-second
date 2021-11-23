import { 
    ALL_USERS_SUCCESS, 
    CREATE_USER_SUCCESS, 
    DELETE_USER_SUCCESS, 
    GET_USER_SUCCESS, 
    UPDATE_USER_SUCCESS 
} from "../types/users/userTypes";

import { User } from "../../models/user";
import { AppActions } from "./models/actions";

export function getUsersSuccess(users: User[]): AppActions {
    return {
        type: ALL_USERS_SUCCESS,
        users,
        error: '',
    }
}

export function getUserSuccess(user: User): AppActions {
    return {
        type: GET_USER_SUCCESS,
        user,
        error: '',
    }
}

export function createUserSuccess(user: User): AppActions {
    return {
        type: CREATE_USER_SUCCESS,
        user,
        error: '',
    }
}

export function updateUserSuccess(user: User): AppActions {
    return {
        type: UPDATE_USER_SUCCESS,
        user,
        error: '',
    }
}

export function deleteUserSuccess(user: User): AppActions {
    return {
        type: DELETE_USER_SUCCESS,
        user,
        error: '',
    }
}