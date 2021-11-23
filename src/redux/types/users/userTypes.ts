import { User } from "../../../models/user";

export const ALL_USERS_SUCCESS = 'ALL_USERS_SUCCESS';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

interface UsersAsync {
    users: User[];
    error: string;
}

interface UserAsync {
    user: User;
    error: string;
}

interface GetUsersSuccess extends UsersAsync {
    type: typeof ALL_USERS_SUCCESS;
}

interface GetUserSuccess extends UserAsync {
    type: typeof GET_USER_SUCCESS;
}

interface CreateUserSuccess extends UserAsync {
    type: typeof CREATE_USER_SUCCESS;    
}

interface UpdateUserSuccess extends UserAsync {
    type: typeof UPDATE_USER_SUCCESS;
}

interface DeleteUserSuccess extends UserAsync {
    type: typeof DELETE_USER_SUCCESS;
}

export type UserActionType = 
    | GetUsersSuccess
    | GetUserSuccess
    | CreateUserSuccess
    | UpdateUserSuccess
    | DeleteUserSuccess;