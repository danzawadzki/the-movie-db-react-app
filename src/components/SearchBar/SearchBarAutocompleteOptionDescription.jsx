import React from "react";

/**
 * Description (title and release year) of a movie in the search bar suggestions list presentational component.
 * @param {Object} props
 * @prop {String} title - The movie title.
 * @prop {Number} releaseYear - The movie release year.
 * @returns {ReactElement || XML}
 */

const SearchBarAutocompleteOptionDescription = (props) => {

    //Destructuring props
    const {title, releaseYear} = props;

    return (
        <div>
            <h6 className="autocompleteListItem__title autocompleteListItem__title--noMargins">
                {title}&nbsp;
                <span className="autocompleteListItem__title--textGreen">
                    ({releaseYear})
                </span>
            </h6>
        </div>
    )
};

export default SearchBarAutocompleteOptionDescription;