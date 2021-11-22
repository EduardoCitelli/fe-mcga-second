import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "users";

export function getUsers() {

    console.log(baseUrl);
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}