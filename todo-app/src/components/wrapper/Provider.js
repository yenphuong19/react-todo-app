import React, { useState, useReducer } from 'react';
import { Context, ModeContext, FilterContext, QueryContext } from '../../services/Context';
import reducer, { initState } from '../../services/reducer';
import { FILTER_ALL } from '../../services/filter'
import { MODE_CREATE } from '../../services/mode'

function Provider ({children}) {

    const [state, dispatch] = useReducer(reducer, initState)
    const [mode, setMode] = useState(MODE_CREATE)
    const [filter, setFilter] = useState(FILTER_ALL)
    const [query, setQuery] = useState('')

    return (
        <Context.Provider value={[state, dispatch]}>
            <ModeContext.Provider value={[mode, setMode]}>
                <FilterContext.Provider value={[filter, setFilter]}>
                    <QueryContext.Provider value={[query,setQuery]}>
                        {children}
                    </QueryContext.Provider>
                </FilterContext.Provider>
            </ModeContext.Provider>
        </Context.Provider>
    )

}

export default Provider;