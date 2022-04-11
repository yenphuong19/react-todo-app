import React, { useState, useContext } from 'react';
import NoItem from './NoItem';
import JobItem from './JobItem';
import { getListRender } from '../../services/todo';
import { Context, ModeContext, FilterContext, QueryContext } from '../../services/Context';

function JobList () {
    const [state, dispatch] = useContext(Context)
    const [mode, setMode] = useContext(ModeContext)
    const [filter, setFilter] = useContext(FilterContext)
    const [query, setQuery] = useContext(QueryContext)

    const {jobs} = state

    const [checked, setChecked] = useState([])
    const handleChecked = (name) => {
        setChecked(() => {
            const isChecked = checked.includes(name)
            if (isChecked) {
                return checked.filter(item => item !== name)
            } else {
                return [...checked, name]
            }
        })
    }

    const [showBtnDelete, setShowBtnDelete] = useState()
    const handleShowBtnDelete = (name) => {
        console.log(jobs.find(job => job.name === name))
        return jobs.find(job => job.name === name) ? setShowBtnDelete(name) : setShowBtnDelete()
    }
    
    if (getListRender(jobs, mode, filter, query).length === 0) {
        return <NoItem />
    } else {
        return (
            <ul className="list-group">
                {
                    getListRender(jobs, mode, filter, query)
                        .map((job, index) => (
                            <JobItem 
                                key={index}
                                job={job}
                                index={index}
                                checked={checked}
                                handleChecked={handleChecked}
                                showBtnDelete={showBtnDelete}
                                handleShowBtnDelete={handleShowBtnDelete}
                            />
                        ))
                }
            </ul>
        )
    }
}

export default JobList;