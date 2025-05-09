import React, { useState } from 'react';

const AcceptTask = ({ data }) => {
    const [taskStatus, setTaskStatus] = useState(null);

    const handleComplete = () => {
        setTaskStatus('completed');
        console.log(`Task "${data.taskTitle}" marked as completed.`);
    };

    const handleFailed = () => {
        setTaskStatus('failed');
        console.log(`Task "${data.taskTitle}" marked as failed.`);
    };

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>

            {taskStatus ? (
                <p className='mt-4 font-semibold'>
                    ✅ Task {taskStatus === 'completed' ? 'Completed' : 'Failed'}
                </p>
            ) : (
                <div className='flex justify-between mt-6 '>
                    <button onClick={handleComplete} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>
                        Mark as Completed
                    </button>
                    <button onClick={handleFailed} className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>
                        Mark as Failed
                    </button>
                </div>
            )}
        </div>
    );
};

export default AcceptTask;
