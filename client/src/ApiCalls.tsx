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

const  sendMessage = async(message: string, convoId: string) => {
        
    const data = { conversationId : convoId, content: message};
    return await fetch(`${API_URL}/messages/${convoId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

  }

const getMessages = async (convoId : string) => {
        
    return await fetch(`${API_URL}/messages/${convoId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
  }

export default { 
    login,
    logout,
    register,
    sendMessage,
    getMessages
};
