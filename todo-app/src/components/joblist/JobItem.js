import React from 'react';
import ButtonDelete from './ButtonDelete';
import CheckBox from './CheckBox'
import JobName from './JobName'

function JobItem ({job, index, checked, handleChecked, showBtnDelete, handleShowBtnDelete}) {
    return (
        <li 
        key={index}
        className="d-flex justify-content-between align-items-center"
        onMouseOver={() => handleShowBtnDelete(job.name)}
        >

            <div>
                <CheckBox 
                    job={job} 
                    checked={checked} 
                    handleChecked={handleChecked}
                />
                <JobName job={job}/>
            </div>

            <ButtonDelete 
                index={index} 
                job={job} 
                showBtnDelete={showBtnDelete}
            />

        </li>
    )
}

export default JobItem;