// InitState
const jobs = [
    {
        id: 1, 
        name: 'Quet nha', 
        completed: false
    },
    {
        id: 2,
        name: 'Lau nha', 
        completed: false
    },
    {
        id: 3,
        name: 'Rua chen', 
        completed: false
    },
    {
        id: 4,
        name: 'Nau com', 
        completed: false
    },
]

export const initState = {
    job: {name: '', completed: false},
    jobs: jobs,
}


// Action
export const SET_JOB = 'set_job'
export const setJob = payload => {
    return {
        type: SET_JOB, 
        payload
    }
}

export const ADD_JOB = 'add_job'
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload,
    }
}

export const DELETE_JOB = 'delete_job'
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

export const CHANGE_STATUS = 'change_status'
export const changeStatus = (payload, status) => {
    return { 
        type: CHANGE_STATUS, 
        payload,
        status
    }
}

export const CHANGE_FILTER = 'change_filter'
export const changeFilter = filter => {
    return { 
        type: CHANGE_FILTER, 
        filter
    }
}

export const SEARCH_JOB = 'search_job'
export const searchJob = payload => {
    return {
        type: SEARCH_JOB,
        payload
    }
}


// Reducer
export default function reducer (state, action) {
    const newJobs = [...state.jobs]
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: {name: action.payload, completed: false},
            }
        case ADD_JOB:
            newJobs.push({name: action.payload, completed: false})
            return {
               ...state,
               jobs: newJobs, 
            }
        case DELETE_JOB:
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        case CHANGE_STATUS:
            let newJobsUpdate 
            if (action.status) {
                newJobsUpdate = newJobs.map(job => {
                    return {
                        id: job.id,
                        name: job.name,
                        completed: action.payload.name === job.name ? true : job.completed,
                    }
                });
            } else {
                newJobsUpdate = newJobs.map(job => {
                    return {
                        id: job.id,
                        name: job.name,
                        completed: action.payload.name === job.name ? false : job.completed,
                    }
                })
            }
            return {
                ...state,
                jobs: newJobsUpdate,
            }
    }
}
