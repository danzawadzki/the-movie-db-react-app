import React from "react";

/*
 *
 * Search Engine Autocomplete Option Component
 *
 */

const SearchEngineAutocompleteOption = props => {
    return (
        <div key={props.index}
             className="searchengine-autocomplete-option d-flex"
             onClick={() => {
                 props.handleMovieChange(props.movie.id);
                 document.querySelector(".searchengine-input").value = props.movie.title;
                 const root = document.querySelector("#root");
                 root.style.background = `url("https://image.tmdb.org/t/p/original${props.movie.backdrop_path}") top center`;
                 root.style.backgroundSize = "cover";
                 props.handleChange({target: {id: "autocompleteSuggestions", value: []}})
             }}>

            {/* Cover */}
            <div className="searchengine-autocomplete-option-cover">
                <img src={`https://image.tmdb.org/t/p/w92_and_h138_bestv2${props.movie.poster_path}`} width={20}/>
            </div>

            {/* Title + Release Year*/}
            <div className="searchengine-autocomplete-option-desc">
                <h className="searchengine-autocomplete-option-desc-title">
                    {props.movie.original_title}
                    ({props.movie.release_date.split("-")[0]})
                </h>
            </div>
        </div>
    )
};

export default SearchEngineAutocompleteOption;