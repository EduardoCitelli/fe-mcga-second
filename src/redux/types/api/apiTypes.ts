export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
export const END_API_CALL = "END_API_CALL";

interface BeginApiCall {
    type: typeof BEGIN_API_CALL;
}

interface ApiCallError {
    type: typeof API_CALL_ERROR;
    error: string;
}

interface EndApiCall {
    type: typeof END_API_CALL;
}

export type ApiActionType =
    | BeginApiCall
    | ApiCallError
    | EndApiCall;