import React, { useContext } from 'react';
import { Context } from '../../services/Context'
import { changeStatus } from '../../services/reducer';

function CheckBox ({job, checked, handleChecked}) {
    const [state, dispatch] = useContext(Context)
    
    return (
        <input 
            type="checkbox"
            className="me-2"
            checked={checked.includes(job.name)}
            onChange={e => {
                handleChecked(job.name);
                dispatch(changeStatus(job, e.target.checked))
            }}
        />
    )
}

export default CheckBox;