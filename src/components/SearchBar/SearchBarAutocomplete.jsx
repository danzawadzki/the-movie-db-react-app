import React from "react";
import SearchBarAutocompleteOption from "./SearchBarAutocompleteOption";

/**
 * Autocomplete list for the search bar component (presentational component).
 *
 * @param {Object} props
 * @prop {Object} suggestionsList - The object with fetched list of TMDb suggestions.
 * @prop {Function} setMovieDescription - Setter for the movie description in the parent component.
 * @prop {Function} handleChange - Handler to change search bar input value.
 * @returns {ReactElement || XML}
 */

const SearchBarAutocomplete = (props) => {
    return (
        <div className="autocompleteList">
            {props.suggestionsList.results ?
                props.suggestionsList.results
                    .splice(0, 10)
                    .map((movie, index) =>
                        <SearchBarAutocompleteOption
                            handleChange={props.handleChange}
                            setMovieDescription={props.setMovieDescription}
                            movie={movie}
                            key={index}/>) : ""}
        </div>
    )
};

export default SearchBarAutocomplete;