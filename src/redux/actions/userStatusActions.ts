import { User } from "../../models/user";
import { ALL_USERS_SUCCESS } from "../types/users/userTypes";
import { AppActions } from "./models/actions";

export function getUsersSuccess(users: User[]): AppActions {
    return {
        type: ALL_USERS_SUCCESS,
        users: users,
        error: ''
    }
}