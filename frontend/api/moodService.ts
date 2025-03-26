import { Platform } from "react-native";
import { Mood } from "../types/mood";

// const API_URL = Platform.OS === 'android' 
//   ? 'http://10.0.2.2:8080/moods'       // Android emulator special IP to reach host machine
//   : 'http://localhost:8080/moods';     // iOS simulator or web

  const API_URL ='https://87e89eab-95e5-4c0f-8192-7ee0196e1581-dev.e1-us-east-azure.choreoapis.dev/employee-mgmt-system/student-mgmt-server/v1.0';
export async function getMood(id: number): Promise<Mood> {
    const response = await fetch(`${API_URL}/moods/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch mood data');
    }

    return response.json();
}

export async function sendMood(student_id: number, emotion: string, is_daily: boolean): Promise<void> {
    console.log('sendMood input:', { student_id, emotion, is_daily });
    try {
        const response = await fetch(`${API_URL}/moods/`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                student_id,
                emotion,
                is_daily
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Failed to send mood data:', errorText);
            throw new Error('Failed to send mood data');
        }

        console.log('Mood data sent successfully');
    } catch (error) {
        console.error('Error in sendMood:', error);
        throw error;
    }
}