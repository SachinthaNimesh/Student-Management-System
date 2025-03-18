import axios, { AxiosResponse } from 'axios';
import { Student } from '../types/student';
import apiClient from './client';

const API_URL = 'http://10.0.2.2:8080'; //replace localhost with http://10.0.2.2:8080

export const getStudentById = async (id: number): Promise<Student | null> => {
    try {
        const response: AxiosResponse<Student> = await axios.get(`${API_URL}/students/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with id ${id}:`, error);
        throw new Error(`Failed to fetch student with id ${id}`);
    }
};