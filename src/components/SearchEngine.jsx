import React from "react";
import SearchEngineAutocomplete from "./SearchEngineAutocomplete";

/*
 *
 * Search Engine Component
 * Input containing one child component: Autocomplete.
 *
 */

const SearchEngine = props => {
    return (
        <div className="input-group">
                                    <span className="searchengine-icon">
                                        <i className="fa fa-search btn" aria-hidden="true"/>
                                    </span>
            <input type="text"
                   onChange={props.handleChange}
                   className="form-control searchengine-input"
                   placeholder="Search for..."
                   aria-label="Search for..."/>
            {props.autocompleteSuggestions ? <SearchEngineAutocomplete
                handleChange={props.handleChange}
                handleMovieChange={props.handleMovieChange}
                autocompleteSuggestions={props.autocompleteSuggestions}/> : ""}
        </div>
    )
};

export default SearchEngine;