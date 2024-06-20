
const safeResponseParse = async response => {
    const body = await response.text();
    try {
        return JSON.parse(body);
    } catch (err) {
        return body;
    }
}

export const serviceFetch = async ({ serviceKey, method, headers = {}, body = null, restrictErrorHandle = false }) => {
    const url = `http://localhost:8080/${serviceKey}`; // Assuming the base URL
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...headers,
        },
        body: body ? JSON.stringify(body) : null,
    });

    const data = await safeResponseParse(response);
    return data;
};

