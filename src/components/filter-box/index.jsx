import React from 'react'

import './index.css'


export const FilterBox = (props) => {
    const {filterOptions, cb} = props;

    function onChange(event) {
        cb(event.target.value);
    }

    return (
        <div class="header">
            <div class="filter" >
                <span> Filter by : </span>
                <select name="drinks" id="drinks" onChange={onChange}>
                    <option value="All" selected="selected"> All</option>
                    {
                        filterOptions.map(option => {
                            return <option value={option}>{option}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}
