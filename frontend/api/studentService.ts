import axios, { AxiosResponse } from 'axios';
import { Student } from '../types/student';
import { Platform } from 'react-native';

const API_URL = Platform.OS === 'android' 
  ? 'http://10.0.2.2:8080'       // Android emulator special IP to reach host machine
  : 'http://localhost:8080';     // iOS simulator or web

export const getStudentById = async (id: number): Promise<Student | null> => {
    try {
        const response: AxiosResponse<Student> = await axios.get(`${API_URL}/students/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with id ${id}:`, error);
        throw new Error(`Failed to fetch student with id ${id}`);
    }
};