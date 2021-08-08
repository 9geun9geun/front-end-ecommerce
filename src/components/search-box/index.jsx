import React from 'react'

import './search-box.styles.css'


export const SearchBox = function({placeholder, handleChange}){
    return(
        <input className = "search"
        type ='search'
        placeholder = {placeholder}
        onChange = {handleChange}
        />
    )
}


