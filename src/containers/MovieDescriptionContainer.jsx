import PropTypes from "prop-types";
import React from "react";
import MovieDescriptionCover from "../components/MovieDescription/MovieDescriptionCover";
import MovieDescriptionInformation from "../components/MovieDescription/MovieDescriptionInformation";

/**
 * MovieDescription Description component - Contains two child components: Cover and Information.
 *
 * @param {Object} props
 * @prop {Object} movieDescription - The movie description from TMDb API response.
 * @returns {ReactElement || XML}
 */

const MovieDescriptionContainer = (props) => {

    // Destructuring props object
    const {
        title, genres, status, runtime, revenue, budget,
        overview, release_date, production_companies, poster_path
    } = props.movieDescription;

    return (
        <div className="container movieDescription">
            <div className="row">
                <MovieDescriptionCover
                    title={title}
                    posterPath={props.movieDescription.poster_path}/>

                <MovieDescriptionInformation
                    title={title}
                    genres={genres}
                    status={status}
                    runtime={runtime}
                    revenue={revenue}
                    budget={budget}
                    overview={overview}
                    releaseDate={release_date}
                    productionCompanies={production_companies}/>
            </div>
        </div>
    )
};

/** PropTypes */
MovieDescriptionContainer.propTypes = {
    movieDescription: PropTypes.object.isRequired
};

export default MovieDescriptionContainer;