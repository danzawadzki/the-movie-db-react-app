import React from "react";
import SearchEngineAutocompleteOption from "./SearchEngineAutocompleteOption";

const SearchEngineAutocomplete = props => {
    console.log("dostalem " + props);
    return (
        <div className="searchengine-autocomplete">
            {props.autocompleteSuggestions.results ?
                props.autocompleteSuggestions.results
                    .splice(0, 10)
                    .map((movie, index) =>
                        <SearchEngineAutocompleteOption
                            movie={movie}
                            index={index}/>) : ""}
        </div>
    )
};

export default SearchEngineAutocomplete;