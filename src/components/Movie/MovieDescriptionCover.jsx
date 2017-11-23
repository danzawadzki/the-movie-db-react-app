import React from "react";

/**
 * Cover for the movie description (presentational component).
 *
 * @param {Object} props
 * @prop {String} posterPath - The movie poster path in TMDb.
 * @returns {ReactElement || XML}
 */

const MovieDescriptionCover = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="moviedescription-cover mb-4 mx-auto">
                <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.posterPath}`}
                    className="moviedescription-cover-image"
                    alt=""/>
            </div>
        </div>
    )
};

export default MovieDescriptionCover;