import React from "react";
import SearchEngineAutocompleteOption from "./SearchEngineAutocompleteOption";

/*
 *
 * Search Engine Autocomplete Component
 * Containing a list of childs: Options.
 *
 */

const SearchEngineAutocomplete = props => {
    return (
        <div className="searchengine-autocomplete">
            {props.autocompleteSuggestions.results ?
                props.autocompleteSuggestions.results
                    .splice(0, 10)
                    .map((movie, index) =>
                        <SearchEngineAutocompleteOption
                            handleChange={props.handleChange}
                            handleMovieChange={props.handleMovieChange}
                            movie={movie}
                            key={index}
                            index={index}/>) : ""}
        </div>
    )
};

export default SearchEngineAutocomplete;