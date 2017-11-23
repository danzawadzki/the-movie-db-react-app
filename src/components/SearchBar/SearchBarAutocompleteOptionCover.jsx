import React from "react";

/**
 * Cover of a single movie in the search bar suggestions list presentational component.
 * @param props
 * @prop {String} posterPath - The movie poster path in TMDb.
 * @returns {ReactElement || XML}
 */

const SearchBarAutocompleteOptionCover = (props) => {
    return (
        <div className="searchengine-autocomplete-option-cover">
            <img src={`https://image.tmdb.org/t/p/w92_and_h138_bestv2${props.posterPath}`} width={20}/>
        </div>
    )
};

export default SearchBarAutocompleteOptionCover;