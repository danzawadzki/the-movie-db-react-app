import React, {Component} from "react";
import {debounce} from "throttle-debounce"
import {handleChange} from "../modules/handlers";
import {fetchMoviesList} from "../modules/fetchers";
import SearchBarAutocomplete from "../components/SearchBar/SearchBarAutocomplete";
import SearchBarIcon from "../components/SearchBar/SearchBarIcon";
import SearchBarInput from "../components/SearchBar/SearchBarInput";

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

        this.fetchMoviesList = debounce(500, fetchMoviesList);
        this.handleChange = handleChange.bind(this);
    }

    /** Fetch movie suggestions list on component update */
    componentDidUpdate(nextProps, nextState) {
        if (nextState.searchKeyWord.length > 0 &&
            nextState.searchKeyWord !== this.state.searchKeyWord) {

            //Fetch and setState
            this.fetchMoviesList(nextState.searchKeyWord,
                response => this.setState({
                    suggestionsList: response
                }));
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

export default SearchBarContainer;