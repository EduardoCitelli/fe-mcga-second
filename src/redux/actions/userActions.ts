import * as userApi from "../../api/usersApi";
import { Dispatch } from "react";
import { AppActions } from "./models/actions";
import { apiCallError, beginApiCall, endApiCall } from "./apiStatusActions";
import { createUserSuccess, deleteUserSuccess, getUsersSuccess, getUserSuccess, updateUserSuccess } from "./userStatusActions";
import { User } from "../../models/user";

export function getUsers() {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return userApi.getUsers()
            .then(response => {
                dispatch(getUsersSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            });
    }
}

export function getUser(userId: string) {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return userApi.getUser(userId)
            .then(response => {
                dispatch(getUserSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}

export function saveUser(user: User): (dispatch: Dispatch<AppActions>) => Promise<void> {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        const id = user.id;

        dispatch(beginApiCall());

        return userApi.saveUser(user)
            .then(response => {
                id ? dispatch(updateUserSuccess(response.data)) : dispatch(createUserSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}

export function deleteUser(userId: string) {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return userApi.deleteUser(userId)
            .then(response => {
                dispatch(deleteUserSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}