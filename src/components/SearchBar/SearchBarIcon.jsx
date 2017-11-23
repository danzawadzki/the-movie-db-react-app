import React from "react";

/**
 * Icon for the search bar presentational component.
 * @returns {ReactElement || XML}
 */

const SearchBarIcon = () => {
    return (
        <span className="searchengine-icon">
            <i className="fa fa-search btn" aria-hidden="true"/>
        </span>
    )
};

export default SearchBarIcon;