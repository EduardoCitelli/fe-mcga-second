import * as userApi from "../../api/usersApi";
import { Dispatch } from "react";
import { AppActions } from "./models/actions";
import { apiCallError, beginApiCall } from "./apiStatusActions";
import { getUsersSuccess } from "./userStatusActions";



export function getUsers() {
    return function(dispatch: Dispatch<AppActions>): Promise<void> {
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