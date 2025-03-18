import axios from 'axios';
import {config} from '../config/env';

const apiClient = axios.create({
    baseURL: config.API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Request failed:', error);
        return Promise.reject(error);
    }
);
export default apiClient;
