import React from "react";

/**
 * Information about the movie (presentational component).
 *
 * @params {Object} props
 * @prop {String} title - The movie title.
 * @prop {String} genres - The movie genres.
 * @prop {String} overview - The movie overview.
 * @prop {String} releaseDate - The movie release date.
 * @prop {Array<Object>} productionCompanies - Array contains objects representing production companies.
 * @prop {Number} runtime - The movie runtime.
 * @prop {String} status - The movie status.
 * @prop {Number} budget - The movie budget.
 * @prop {Number} revenue - The movie revenue.
 * @returns {ReactElement || XML}
 */

const MovieDescriptionInformation = props => {
    return (
        <div className="offset-lg-1 col-12 col-md-6">
            <h1 className="mb-0">{props.title}</h1>
            <p className="mb-3">
                {props.genres
                    .map(genre => genre.name)
                    .join(", ")}
            </p>
            <strong>Description:</strong>
            <p>{props.overview}</p>
            <div className="row pt-3">
                <div className="col-5">
                    <strong>Release Date:</strong>
                    <p className="moviedescription-info">
                        {props.releaseDate}
                    </p>

                    <strong>Status:</strong>
                    <p className="moviedescription-info">
                        {props.status}
                    </p>

                    <strong>Runtime:</strong>
                    <p className="moviedescription-info">
                        {props.runtime} mins
                    </p>
                </div>
                <div className="col-7">
                    <strong>Production:</strong>
                    <p className="moviedescription-info">
                        {props.productionCompanies
                            .map(company => company.name)
                            .join(", ")}
                    </p>

                    <strong>Burget:</strong>
                    <p className="moviedescription-info">
                        {props.budget > 0 ? props.budget.toLocaleString() : "Unknown"}
                    </p>

                    <strong>Revenue:</strong>
                    <p className="moviedescription-info">
                        {props.revenue > 0 ? props.revenue.toLocaleString() : "Unknown"}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default MovieDescriptionInformation;