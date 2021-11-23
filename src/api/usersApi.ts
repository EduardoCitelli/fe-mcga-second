import { User } from "../models/user";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "users/";

export function getUsers(): Promise<any> {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function getUser(userId: string): Promise<any> {
    return fetch(baseUrl + userId)
        .then(handleResponse)
        .catch(handleError);
}

export function saveUser(user: User): Promise<any> {
    return fetch(baseUrl + (user.id || ""), {
        method: user.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteUser(userId: string): Promise<any> {
    return fetch(baseUrl + userId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}