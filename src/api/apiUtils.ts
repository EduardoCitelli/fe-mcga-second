export async function handleResponse(response: Response) {
    if (response.ok)
        return response.json();

    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }

    throw new Error("Network response was not ok, try leater");
}

export function handleError(error: Error) {
    console.error("API call failed. " + error);
    throw error;
}