import { ApiActionType, API_CALL_ERROR, BEGIN_API_CALL } from "../types/api/apiTypes";


interface ApiState {
    error: string;
}

const defaultState: ApiState = {
    error: '',
}

export default function apiStatusReducer(state = defaultState, action: ApiActionType): ApiState {
    switch (action.type) {
        case BEGIN_API_CALL:
            return { error: '' };

        case API_CALL_ERROR:
            return { error: action.error }

        default:
            return state;
    }
}
