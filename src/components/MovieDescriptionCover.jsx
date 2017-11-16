import React from "react";

/*
 *
 * Movie Description Cover Component
 *
 */

const MovieDescriptionCover = props => {
    return (
        <div className="moviedescription-cover mb-4 mx-auto">
            <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.posterPath}`}
                className="moviedescription-cover-image"
                alt=""/>
        </div>
    )
};

export default MovieDescriptionCover;