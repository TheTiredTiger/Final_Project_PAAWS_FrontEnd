import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const api = axios.create({
        baseURL: 'https://961mfdzq-3000.uks1.devtunnels.ms', // Replace with your API base URL "Porta"
        headers: {
            'Content-Type': 'application/json',
            /* Authorization: `Bearer ${token}`, */
        },
    });

    //--------------------------Test------------
    api.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });


    //working
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
            //For debugging --Delete-- Security Hazard -RM
            console.log("My token Response:\n", response.data.token, "\nMy User Id:", response.data.user_id);
            //---------------------------------------------------
            setUser({ id: response.data.user_id });
            return response.data;
        } catch (error) {
            console.error('Login failed:', error.response.data || error.message);
            throw error;
        }
    };

    const logoutUser = async () => {
        try {
            localStorage.removeItem('token'); //Sends token to tokens'heaven
            setToken(null);
            setUser(null);

            //It would be also possible to invalidate token on server side

        } catch (error) {
            console.error('Logout failed:', error.response.data);
            throw error;
        }
    };

    const get_user_profile = async () => {
        try {
            const response = await api.get('/get_user_profile');
            // Killing Bugs Porpose
            console.log("Response:", response.data);
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Fetching profile failed:', error.response.data);
            throw error;
        }
    };


    //For Editing Info later single user by jwt its not very helpfull make route user/<id>?
    //or erase
    const getProfile = async () => {
        try {
            const response = await api.get('/profile');
            //Killing bugs porposes
            console.log("Response:", response.data)
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Fetching profile failed:', error.response.data);
            throw error;
        }
    };
    //-------------------------------------------------------------------------
    const listAnimals = async () => {
        try {
            const response = await api.get('/animals');
            return response.data;
        } catch (error) {
            console.error('Fetching animals failed:', error.response.data);
            throw error;
        }
    };
    //List Single Animal
    const getAnimal = async (animalId) => {
        try {
            const response = await api.get(`/animal/${animalId}`);
            return response.data;
        } catch (error) {
            console.error(`Fetching animal with ID ${animalId} failed:`, error.response ? error.response.data : error.message);
            throw error;
        }
    };

    // Auto-login if token is available
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            /* getProfile(); */
        }
    }, []);

    //-------####-Admin Features-###----------------
    //Delete Animal
    const deleteAnimal = async (animalId) => {
        try {
            await api.delete(`/admin_delete_animal/${animalId}`);
        } catch (error) {
            console.error(`Deleting animal with ID ${animalId} failed:`, error.response ? error.response.data : error.message);
            throw error;
        }
    };
    //Delete Sinlge Image by id
    const deleteImage = async (imageId) => {
        try {
            await api.delete(`/delete_image/${imageId}`);
            console.log(`Image with ID ${imageId} deleted successfully.`);
        } catch (error) {
            console.error(`Deleting image with ID ${imageId} failed:`, error.response ? error.response.data : error.message);
            throw error;
        }
    };

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
                get_user_profile,
                listAnimals,
                getAnimal,
                deleteAnimal,
                deleteImage,
            }}
        >
            {children}
        </APIContext.Provider>
    );
};

export const useAPI = () => useContext(APIContext);
