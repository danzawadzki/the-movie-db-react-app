import React from "react";
import "./MovieDescription.css";

/**
 * Cover for the movie description (presentational component).
 *
 * @param {Object} props
 * @prop {String} title - THe movie title.
 * @prop {String} posterPath - The movie poster path in TMDb.
 * @returns {ReactElement || XML}
 */

const MovieDescriptionCover = (props) => {

    //Destructuring props
    const {title, posterPath} = props;

    return (
        <div className="col-12 col-md-6 col-lg-5 movieCoverContainer">
            <div className="movieCoverContainer__cover">
                <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`}
                    className="movieCoverContainer__cover--fixedSize"
                    alt={`Movie poster of ${title}`}/>

            </div>
        </div>
    )
};

export default MovieDescriptionCover;