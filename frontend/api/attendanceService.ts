import axios, { AxiosResponse, AxiosError } from 'axios';
import { Platform } from 'react-native';
import { API_URL } from '../config/config';

export const postCheckinById = async (id: number, latitude: number, longitude: number, checkIn: boolean): Promise<any> => {
    try {
        const requestData = {
            check_in: checkIn,
            check_in_lat: latitude,
            check_in_long: longitude,
        };
        
        console.log(`Sending request to: ${API_URL}/attendance/${id}`);
        console.log('Request data:', requestData);
        
        const response: AxiosResponse = await axios.post(
            `${API_URL}/attendance/${id}`, 
            requestData,
            { 
                timeout: 10000,  // 10 second timeout
                headers: { 'Content-Type': 'application/json' }
            }
        );
        
        console.log('Response received:', response.status);
        console.log('Response data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting check-in:', error);
        
        // Detailed error logging based on error type
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            
            console.error('Request URL:', axiosError.config?.url);
            console.error('Request method:', axiosError.config?.method);
            
            if (axiosError.response) {
                // The server responded with an error status code
                console.error('Status:', axiosError.response.status);
                console.error('Data:', axiosError.response.data);
                throw new Error(`Server error: ${axiosError.response.status}`);
            } else if (axiosError.request) {
                // The request was made but no response was received
                console.error('No response received');
                if (Platform.OS === 'android') {
                    console.error('If testing on Android emulator, verify API_URL is http://10.0.2.2:8080');
                } else if (Platform.OS === 'ios') {
                    console.error('If testing on iOS simulator, verify API_URL is http://localhost:8080');
                }
                throw new Error('Network error: No response from server');
            } else {
                // Something happened in setting up the request
                console.error('Request setup error:', axiosError.message);
                throw new Error(`Request setup error: ${axiosError.message}`);
            }
        }
        
        throw new Error('Failed to post check-in');
    }
};

export const postCheckoutById = async (id: number, latitude: number, longitude: number): Promise<any> => {
    try {
        const requestData = {
            check_in: false,
            check_in_lat: latitude,
            check_in_long: longitude,
        };
        
        console.log(`Sending request to: ${API_URL}/attendance/${id}`);
        console.log('Request data:', requestData);
        
        const response: AxiosResponse = await axios.post(
            `${API_URL}/attendance/${id}`, 
            requestData,
            { 
                timeout: 10000,  // 10 second timeout
                headers: { 'Content-Type': 'application/json' }
            }
        );
        
        console.log('Response received:', response.status);
        console.log('Response data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting check-out:', error);
        
        // Detailed error logging based on error type
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            
            console.error('Request URL:', axiosError.config?.url);
            console.error('Request method:', axiosError.config?.method);
            
            if (axiosError.response) {
                // The server responded with an error status code
                console.error('Status:', axiosError.response.status);
                console.error('Data:', axiosError.response.data);
                throw new Error(`Server error: ${axiosError.response.status}`);
            } else if (axiosError.request) {
                // The request was made but no response was received
                console.error('No response received');
                if (Platform.OS === 'android') {
                    console.error('If testing on Android emulator, verify API_URL is http://10.0.2.2:8080');
                } else if (Platform.OS === 'ios') {
                    console.error('If testing on iOS simulator, verify API_URL is http://localhost:8080');
                }
                throw new Error('Network error: No response from server');
            } else {
                // Something happened in setting up the request
                console.error('Request setup error:', axiosError.message);
                throw new Error(`Request setup error: ${axiosError.message}`);
            }
        }
        
        throw new Error('Failed to post check-out');
    }
};