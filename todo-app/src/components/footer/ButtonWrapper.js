import React, { useContext } from 'react';
import { ModeContext } from '../../services/Context';
import { MODE_CREATE, MODE_SEARCH } from '../../services/mode'

function ButtonWrapper () {
    const [mode, setMode] = useContext(ModeContext)

    const isCreateMode = () => mode === MODE_CREATE
    const isSearchMode = () => mode === MODE_SEARCH

    return (
        <div className="col-sm-2 buttons">
            <a 
                title="Add new"
                className={`
                    button add 
                    ${isCreateMode() ? " selected" : "add"}
                `}
                onClick={() => setMode(MODE_CREATE)}
            ></a>
            <a 
                title="Search"
                className={`
                    button search 
                    ${isSearchMode() ? "selected" : ""}
                `}
                onClick={() => setMode(MODE_SEARCH)}
            ></a>
        </div>
    )
}

export default ButtonWrapper;