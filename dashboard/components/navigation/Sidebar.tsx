import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className='w-[226px] h-[992px] flex flex-col p-4 bg-gray-200'>
            <nav className='mb-5'>
                <h2 className='text-lg font-bold text-blue-600'>
                    Trainer Dashboard
                </h2>
            </nav>
            <nav>
                <h2 className='text-lg font-bold text-blue-600'>Student Management</h2>
            </nav>

        </div>
    );
};

export default Sidebar;