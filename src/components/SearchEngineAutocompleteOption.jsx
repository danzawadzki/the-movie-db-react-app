import React from "react";

const SearchEngineAutocompleteOption = props => {
    return (
        <div key={`autocomplete-option-${props.index}`}
             className="searchengine-autocomplete-option d-flex"
             onClick={() => console.log(props.movie)}>

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