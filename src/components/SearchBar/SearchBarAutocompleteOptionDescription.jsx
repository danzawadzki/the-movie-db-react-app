import React from "react";

/**
 * Description (title and release year) of a movie in the search bar suggestions list presentational component.
 * @param {Object} props
 * @prop {String} title - The movie title.
 * @prop {Number} releaseYear - The movie release year.
 * @returns {ReactElement || XML}
 */

const SearchBarAutocompleteOptionDescription = (props) => {
    return (
        <div className="searchengine-autocomplete-option-desc">
            <h6 className="searchengine-autocomplete-option-desc-title">
                {props.title} ({props.releaseYear})
            </h6>
        </div>
    )
};

export default SearchBarAutocompleteOptionDescription;