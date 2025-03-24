import React from 'react';

const Titlebar: React.FC = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-600">Student Management Portal</h1>
            <div className="flex items-center space-x-4">
                <button className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                <span className="text-gray-600">Trainer User</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    T
                </div>
            </div>
        </div>
    );
};

export default Titlebar;