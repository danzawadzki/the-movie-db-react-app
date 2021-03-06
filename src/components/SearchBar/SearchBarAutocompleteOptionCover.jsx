import PropTypes from "prop-types";
import React from "react";

/**
 * Cover of a single movie in the search bar suggestions list presentational component.
 * @param props
 * @prop {String} posterPath - The movie poster path in TMDb.
 * @returns {ReactElement || XML}
 */

const SearchBarAutocompleteOptionCover = (props) => {

    //Destructuring props
    const {posterPath} = props;

    return (
        <div className="autocompleteListItem__cover">
            <img src={`https://image.tmdb.org/t/p/w92_and_h138_bestv2${posterPath}`} alt="Movie Poster" width={20}/>
        </div>
    )
};

/** PropTypes */
SearchBarAutocompleteOptionCover.propTypes = {
    posterPath: PropTypes.string.isRequired
};

export default SearchBarAutocompleteOptionCover;