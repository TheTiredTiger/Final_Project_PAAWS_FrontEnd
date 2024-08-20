import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const api = axios.create({
        baseURL: 'https://961mfdzq-3000.uks1.devtunnels.ms', // Replace with your API base URL
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const registerUser = async (userData) => {
        try {
            const response = await api.post('/register', userData);
            return response.data;
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            throw error;
        }
    };

    const loginUser = async (credentials) => {
        try {
            const response = await api.post('/login', credentials);
            setToken(response.data.token);
            setUser({ id: response.data.user_id });
            return response.data;
        } catch (error) {
            console.error('Login failed:', error.response.data);
            throw error;
        }
    };

    const logoutUser = async () => {
        try {
            await api.post('/logout');
            setToken(null);
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error.response.data);
            throw error;
        }
    };

    const getProfile = async () => {
        try {
            const response = await api.get('/profile');
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Fetching profile failed:', error.response.data);
            throw error;
        }
    };

    const listAnimals = async () => {
        try {
            const response = await api.get('/animals');
            return response.data;
        } catch (error) {
            console.error('Fetching animals failed:', error.response.data);
            throw error;
        }
    };

    // Auto-login if token is available
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            getProfile();
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    return (
        <APIContext.Provider
            value={{
                user,
                token,
                registerUser,
                loginUser,
                logoutUser,
                getProfile,
                listAnimals,
            }}
        >
            {children}
        </APIContext.Provider>
    );
};

export const useAPI = () => useContext(APIContext);
