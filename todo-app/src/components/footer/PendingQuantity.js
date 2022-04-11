import React, { useContext } from 'react';
import { Context } from '../../services/Context'

function PendingQuantity () {
    const [state] = useContext(Context)
    const {jobs} = state
    return (
        <div>
            {jobs
                .filter(job => job.completed === false)
                .length
            } pending tasks
        </div>
    )
}

export default PendingQuantity;