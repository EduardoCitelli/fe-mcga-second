import { API_CALL_ERROR, BEGIN_API_CALL } from "../types/api/apiTypes";
import { AppActions } from "./models/actions";

export function beginApiCall(): AppActions {
    return {
        type: BEGIN_API_CALL
    }
}

export function apiCallError(error: string): AppActions {
    return {
        type: API_CALL_ERROR,
        error: error,
    }
}