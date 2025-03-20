export interface Mood {
    id: number;
    student_id: number;
    recorded_at: Date;
    emotion: string;
    is_daily: boolean;
}