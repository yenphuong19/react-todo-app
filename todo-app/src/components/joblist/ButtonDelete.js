import React, { useContext } from 'react';
import { deleteJob } from '../../services/reducer';
import { Context } from '../../services/Context'

function ButtonDelete ({index, job, showBtnDelete}) {
    const [state, dispatch] = useContext(Context)

    return (
        <button 
            className={`
                delete 
                ${job.name === showBtnDelete ? 'show' : ''}
            `}
            onClick={(e) => {
                e.preventDefault()
                dispatch(deleteJob(index))
            }}
        ></button>
    )
}

export default ButtonDelete;