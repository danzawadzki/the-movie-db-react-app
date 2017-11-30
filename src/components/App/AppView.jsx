import PropTypes from "prop-types";
import React from "react";
import MovieDescription from "../../containers/MovieDescriptionContainer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";

/**
 * The main App presentational component. Gather header, movie description and footer components in one place.
 *
 * @param props
 * @prop {Style} appStyle - The styles for app background (changing background-image).
 * @prop {Function} setMovieDescription - Setter for the movie description in the parent component.
 * @prop {Object} movieDescription  - The movie description from TMDb API response.
 * @returns {ReactElement || XML}
 */

const AppView = (props) => {
    return (
        <div className="App" style={props.appStyle}>
            <Header setMovieDescription={props.setMovieDescription}/>
            {Object.keys(props.movieDescription).length !== 0 &&
            <MovieDescription movieDescription={props.movieDescription}/>}
            <Footer/>
        </div>
    )
};

/** PropTypes */
AppView.propTypes = {
    appStyle: PropTypes.string
};

export default AppView;