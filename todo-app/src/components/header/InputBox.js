import React, { useContext } from 'react';
import { Context } from '../../services/Context';
import { setJob, addJob } from '../../services/reducer';

function InputBox () {
    const [state, dispatch] = useContext(Context);
    const {job} = state

    return (
        <form 
            className="form"
            onSubmit={e => {
                e.preventDefault();
                dispatch(addJob(job.name));
                dispatch(setJob(''));
            }}
        >

            <input 
                autoFocus
                type="text"
                placeholder="Add new"
                className="form-control"
                value={job.name}
                onChange={e => dispatch(setJob(e.target.value))}
            />

        </form>
    )
}

export default InputBox;