import axios, { AxiosResponse } from 'axios';
import { Student } from '../types/student';
import { Platform } from 'react-native';

// const API_URL = Platform.OS === 'android' 
//   ? 'http://10.0.2.2:8080'       // Android emulator special IP to reach host machine
//   : 'http://localhost:8080';     // iOS simulator or web

const API_URL ='https://87e89eab-95e5-4c0f-8192-7ee0196e1581-dev.e1-us-east-azure.choreoapis.dev/employee-mgmt-system/student-mgmt-server/v1.0';

export const getStudentById = async (id: number): Promise<Student | null> => {
    try {
        const response: AxiosResponse<Student> = await axios.get(`${API_URL}/students/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with id ${id}:`, error);
        throw new Error(`Failed to fetch student with id ${id}`);
    }
};