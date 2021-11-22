import { User } from "../../../models/user";

export const ALL_USERS_SUCCESS = 'ALL_USERS_SUCCESS';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

interface UsersAsync {
    users: User[];
    error: string;
}

interface GetUsersSuccess extends UsersAsync {
    type: typeof ALL_USERS_SUCCESS;
}

export type UserActionType = 
    | GetUsersSuccess;