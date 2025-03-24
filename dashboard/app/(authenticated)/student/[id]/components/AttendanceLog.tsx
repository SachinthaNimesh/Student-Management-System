import React from 'react';

interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
}

const attendanceData: AttendanceRecord[] = [
  { date: '2025-02-20', checkIn: '8.00 AM', checkOut: '5.00 PM' },
  { date: '2025-02-21', checkIn: '8.15 AM', checkOut: '5.15 PM' },
  { date: '2025-02-22', checkIn: '8.05 AM', checkOut: '5.20 PM' },
  { date: '2025-02-23', checkIn: '7.50 AM', checkOut: '5.00 PM' },
  { date: '2025-02-24', checkIn: '8.10 AM', checkOut: '5.15 PM' },
];

const AttendanceLog: React.FC = () => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', backgroundColor: '#f9f9f9' }}>
      <h2>Attendance Log</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>DATE</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>CHECK IN</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>CHECK OUT</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{record.date}</td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{record.checkIn}</td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{record.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceLog;