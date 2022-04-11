import React, { useContext } from 'react';
import { FilterContext } from '../../services/Context'
import { filterList } from '../../services/filter'

function Filter () {
    const [filter, setFilter] = useContext(FilterContext)

    return (
        <ul className="filter">
            {filterList.map(filterItem => {
                return (
                    <li 
                        key={filterItem}
                        className="d-inline-block"
                    >
                            <a 
                                onClick={ () => setFilter(filterItem)} 
                                className={filterItem === filter ? 'selected' : ''}
                            >
                                {filterItem}
                            </a>
                    </li>
                )
            })}
        </ul>
    )
} 

export default Filter;