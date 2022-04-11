import React, { useContext } from 'react';
import { QueryContext } from '../../services/Context';

function SearchBox() {
    const [query, setQuery] = useContext(QueryContext)
   
    return (
        <input 
            autoFocus
            type="text"
            placeholder="Search for"
            className="form-control"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    )
}

export default SearchBox;