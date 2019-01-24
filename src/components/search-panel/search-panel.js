import React from 'react';
import { Input } from 'reactstrap';
import './search-panel.css';
const SearchPanel =() =>{
    return(
        <Input
            className = "form-control search-input"
            type = "text"
            placeholder = "Поиск по записям"
        />
    )
}
export default SearchPanel;