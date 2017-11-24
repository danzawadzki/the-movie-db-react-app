import PropTypes from "prop-types";
import React from "react";
import SearchBarAutocompleteOptionCover from "./SearchBarAutocompleteOptionCover";
import SearchBarAutocompleteOptionDescription from "./SearchBarAutocompleteOptionDescription";

/**
 * Single element in the autocomplete list for the search bar component (presentational component).
 *
 * @param {Object} props
 * @prop {Object} movie - Single child movie from the fetched list of TMDb suggestions.
 * @prop {Function} setMovieDescription - Setter for the movie description in the parent component.
 * @prop {Function} handleChange - Handler to change search bar input value.
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
            className="searchengine-autocomplete-option d-flex"
            onClick={handleMovieSelect}>

            <SearchBarAutocompleteOptionCover
                posterPath={poster_path}/>

            <SearchBarAutocompleteOptionDescription
                title={title}
                releaseYear={release_date.split("-")[0]}/>
        </div>
    )
};

/** PropTypes */
SearchBarAutocompleteOption.propTypes = {
    movie: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    setMovieDescription: PropTypes.func.isRequired
};

export default SearchBarAutocompleteOption;