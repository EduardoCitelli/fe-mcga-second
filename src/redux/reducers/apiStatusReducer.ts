import { ApiActionType, API_CALL_ERROR, BEGIN_API_CALL, END_API_CALL } from "../types/api/apiTypes";


interface ApiState {
    error: string;
    loading: boolean;
}

const defaultState: ApiState = {
    error: '',
    loading: false,
}

export default function apiStatusReducer(state = defaultState, action: ApiActionType): ApiState {
    switch (action.type) {
        case BEGIN_API_CALL:
            return {
                error: '',
                loading: true,
            };

        case API_CALL_ERROR:
            return {
                error: action.error,
                loading: false
            }

        case END_API_CALL:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}
