import React from "react";

/*
 *
 * Movie Description Information Component
 *
 */

const MovieDescriptionInformation = props => {
    return (
        <div>
            <h1 className="mb-0">{props.title}</h1>
            <p className="mb-3">
                {props.genres
                    .map(genre=>genre.name)
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
                        {props.production_companies
                            .map(company => company.name)
                            .join(", ")}
                    </p>

                    <strong>Burget:</strong>
                    <p className="moviedescription-info">
                        {props.budget > 0? props.budget.toLocaleString() : "Unknown"}
                    </p>

                    <strong>Revenue:</strong>
                    <p className="moviedescription-info">
                        {props.revenue > 0? props.revenue.toLocaleString() : "Unknown"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDescriptionInformation;