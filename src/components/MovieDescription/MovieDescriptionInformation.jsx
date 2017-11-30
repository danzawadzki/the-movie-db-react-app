import PropTypes from "prop-types";
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

const MovieDescriptionInformation = (props) => {

    const {title, genres, overview, releaseDate, productionCompanies,
    runtime, status, budget, revenue} = props;

    return (
        <div className="col-12 col-md-6">
            <h1 className="mb-0">{title}</h1>
            <p className="mb-3">
                {genres
                    .map(genre => genre.name)
                    .join(", ")}
            </p>
            <strong>Description:</strong>
            <p>{overview}</p>
            <div className="row pt-3">
                <div className="col-5">
                    <strong>Release Date:</strong>
                    <p className="movieDescription__information">
                        {releaseDate}
                    </p>

                    <strong>Status:</strong>
                    <p className="movieDescription__information">
                        {status}
                    </p>

                    <strong>Runtime:</strong>
                    <p className="movieDescription__information">
                        {runtime} mins
                    </p>
                </div>
                <div className="col-7">
                    <strong>Production:</strong>
                    <p className="movieDescription__information">
                        {productionCompanies
                            .map(company => company.name)
                            .join(", ")}
                    </p>

                    <strong>Budget:</strong>
                    <p className="movieDescription__information">
                        {budget > 0 ? budget.toLocaleString() : "Unknown"}
                    </p>

                    <strong>Revenue:</strong>
                    <p className="movieDescription__information">
                        {revenue > 0 ? revenue.toLocaleString() : "Unknown"}
                    </p>
                </div>
            </div>
        </div>
    )
};

/** PropTypes */
MovieDescriptionInformation.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    productionCompanies: PropTypes.array.isRequired,
    runtime: PropTypes.string,
    status: PropTypes.string,
    budget: PropTypes.string,
    revenue: PropTypes.string
};

export default MovieDescriptionInformation;