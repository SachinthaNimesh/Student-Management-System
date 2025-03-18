import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://10.0.2.2:8080'; // replace localhost with http://10.0.2.2:8080

export const postCheckinById = async (id: number, latitude: number, longitude: number, checkIn: boolean): Promise<void> => {
    try {
        const response: AxiosResponse<void> = await axios.post(`${API_URL}/attendance/${id}`, {
            check_in: checkIn,
            check_in_lat: latitude,
            check_in_long: longitude,
        });
        return response.data;
    } catch (error) {
        console.error('Error posting check-in:', error);
        throw new Error('Failed to post check-in');
    }
};