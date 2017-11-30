import React from "react";
import "./SearchBar.css";

/**
 * Icon for the search bar presentational component.
 * @returns {ReactElement || XML}
 */

const SearchBarIcon = () => {
    return (
        <span className="searchBar__icon searchBar__icon--pullRight">
            <i className="fa fa-search btn" aria-hidden="true"/>
        </span>
    )
};

/** PropTypes */
SearchBarIcon.propTypes = {};

export default SearchBarIcon;