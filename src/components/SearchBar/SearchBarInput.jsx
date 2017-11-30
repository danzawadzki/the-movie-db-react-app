import React from "react";
import "./SearchBar.css";

/**
 * Input for the search bar presentational component.
 * @param {Object} props
 * @prop {Function} handleChange - Handler for a input onChange event.
 * @returns {ReactElement || XML}
 */

const SearchBarInput = (props) => {
    return (
        <input type="text"
               id="searchKeyWord"
               value={props.searchKeyWord}
               onChange={props.handleChange}
               className="searchBar__input form-control"
               placeholder="Search for..."
               aria-label="Search for..."/>
    )
};

export default SearchBarInput;
