import React from 'react';
import Image from 'next/image';

interface SummaryCardProps {
  name: string;
  id: number;
  employer: string;
  workingHours: string;
  status: string;
  statusEmoji: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ name, id, employer, workingHours, status, statusEmoji}) => {
  return (
    <a href='#'>
      <div className="border border-gray-300 rounded-lg p-3 bg-[#fff]/50 w-[320px] h-[150px] shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between flex-row-reverse">
          <div className="flex flex-col text-left space-y-0.4 ml-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>ID: {id}</p>
            <p>Employer: {employer}</p>
            <p className='text-gray-500'>Working Hours:<br/> {workingHours}</p>
            <div className="flex items-center space-x-1 justify-end">

            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/user.jpg"
              width={80}
              height={80}
              alt="Picture of the author" 
              className='rounded-full mb-2 border border-gray-300'
            />
            <span className="bg-[#DCFCE7] px-1 py-0.5 rounded-full text-[#166534] text-xs "><span className="text-xs">{statusEmoji}</span>{status}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SummaryCard;