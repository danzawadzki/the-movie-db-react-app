import PropTypes from "prop-types";
import React, {Component} from "react";
import {debounce} from "throttle-debounce"
import SearchBarAutocomplete from "../components/SearchBar/SearchBarAutocomplete";
import SearchBarIcon from "../components/SearchBar/SearchBarIcon";
import SearchBarInput from "../components/SearchBar/SearchBarInput";
import {fetchMoviesList} from "../modules/fetchers";
import {handleChange} from "../modules/handlers";

/**
 * The container for search bar components and function to fetch movie suggestions.
 *
 * @param {Object} props
 * @prop {Function} setMovieDescription - Setter for the movie description in the parent component.
 * @returns {ReactElement || XML}
 */

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);

        /**
         * @type {Object} state - The component state.
         * @prop {String} searchKeyWord - Value of the search input.
         * @prop {Object} suggestionsList - The object with fetched list of TMDb suggestions.
         */
        this.state = {
            searchKeyWord: "",
            suggestionsList: {}
        };

        this.setMovieSuggestionsList = debounce(500, this.setMovieSuggestionsList).bind(this);
        this.handleChange = handleChange.bind(this);
    }

    /** Fetch movie suggestions list on component update */
    componentDidUpdate(nextProps, nextState) {
        if (nextState.searchKeyWord.length > 0 &&
            nextState.searchKeyWord !== this.state.searchKeyWord) {

            this.setMovieSuggestionsList(nextState.searchKeyWord, response => {
                this.setState({
                    suggestionsList: response
                })
            });
        }
    }

    /**
     * Setter for the movie suggestions list.
     * @param {String} id - The key word to generate suggested movies list.
     * @param {Function} callback - The callback fun to call with response.
     * TODO: Try to bind this with out passing callback func
     */
    async setMovieSuggestionsList(searchKeyWord, callback) {
        let data = await fetchMoviesList(searchKeyWord);

        //Sorting results
        data.results = data.results
            .sort((a, b) =>
                (a.vote_count > b.vote_count) ? -1 : 1);

        //Try/Catch block
        try {
            callback(data);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Renders the component.
     * @returns {ReactElement || XML}
     */
    render() {
        return (
            <div className="input-group">
                <SearchBarIcon/>
                <SearchBarInput
                    searchKeyWord={this.state.searchKeyWord}
                    handleChange={this.handleChange}/>
                {Object.keys(this.state.suggestionsList).length > 0 &&
                this.state.searchKeyWord &&
                <SearchBarAutocomplete
                    handleChange={this.handleChange}
                    setMovieDescription={this.props.setMovieDescription}
                    suggestionsList={this.state.suggestionsList}/>}
            </div>
        )
    }
}

/** Prop Types */
SearchBarContainer.propTypes = {
    setMovieDescription: PropTypes.func.isRequired
};

export default SearchBarContainer;