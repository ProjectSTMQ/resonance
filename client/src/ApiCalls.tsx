// Define all of the API calls the client can make to the server

const API_URL = 'http://localhost:5000/api';

const login = async (data: unknown) => {
    return await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

const logout = async () => {
    return await fetch(`${API_URL}/auth/logout`, {
        method: "POST"
    })
}

const register = async (data: unknown) => {
    return await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
}

export default { 
    login,
    logout,
    register
};
