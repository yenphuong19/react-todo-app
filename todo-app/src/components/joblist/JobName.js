import React from 'react';

function JobName ({job}) {
    return (
        <span 
            className={job.completed === true ? 'completed' : ''}
        >
            {job.name}
        </span>
    )
}

export default JobName;