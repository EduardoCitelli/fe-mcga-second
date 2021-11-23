import * as userApi from "../../api/usersApi";
import { Dispatch } from "react";
import { AppActions } from "./models/actions";
import { apiCallError, beginApiCall } from "./apiStatusActions";
import { createUserSuccess, deleteUserSuccess, getUsersSuccess, getUserSuccess, updateUserSuccess } from "./userStatusActions";
import { User } from "../../models/user";

export function getUsers() {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return userApi.getUsers()
            .then(response => {
                dispatch(getUsersSuccess(response.data));
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
                dispatch(getUserSuccess(response.data))
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}

export function saveUser(user: User) {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return userApi.saveUser(user)
            .then(response => {
                user.id
                    ? dispatch(updateUserSuccess(response.data))
                    : dispatch(createUserSuccess(response.data));
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
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}