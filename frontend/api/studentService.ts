import axios, { AxiosResponse } from 'axios';
import { Student } from '../types/student';
import { API_URL } from '../config/config';

export const getStudentById = async (id: number): Promise<Student | null> => {
    try {
        const response: AxiosResponse<Student> = await axios.get(`${API_URL}/students/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with id ${id}:`, error);
        throw new Error(`Failed to fetch student with id ${id}`);
    }
};