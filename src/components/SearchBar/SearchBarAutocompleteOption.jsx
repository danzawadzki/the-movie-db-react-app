import React from "react";
import SearchBarAutocompleteOptionCover from "./SearchBarAutocompleteOptionCover";
import SearchBarAutocompleteOptionDescription from "./SearchBarAutocompleteOptionDescription";

/**
 * Single element in the autocomplete list for the search bar component (presentational component).
 *
 * @param {Object} props
 * @prop {Object} movie - Single child movie from the fetched list of TMDb suggestions.
 * @returns {ReactElement || XML}
 */

const SearchBarAutocompleteOption = (props) => {

    //Destructuring props object
    const {id, title, poster_path, release_date} = props.movie;

    //Handler to select movie in the parent component
    const handleMovieSelect = () => {
        //Set search input content
        props.handleChange({
            target: {
                value: "",
                id: "searchKeyWord"
            }
        });

        //Set movie description
        props.setMovieDescription(id);
    };

    return (
        <div
            className="autocompleteListItem"
            onClick={handleMovieSelect}>

            <SearchBarAutocompleteOptionCover
                posterPath={poster_path}/>

            <SearchBarAutocompleteOptionDescription
                title={title}
                releaseYear={release_date.split("-")[0]}/>
        </div>
    )
};

export default SearchBarAutocompleteOption;