import React from "react";

const MovieDescriptionInformations = props => {
    return (
        <div>
            <h1 className="mb-0">{props.title}</h1>
            <p className="mb-3">Adventure, Drama, Science Fiction</p>
            <strong>Description:</strong>
            <p>{props.overview}</p>
            <div className="row pt-3">
                <div className="col-5">
                    <strong>Release Date:</strong>
                    <p className="moviedescription-info">{props.releaseDate}</p>

                    <strong>Status:</strong>
                    <p className="moviedescription-info">Released</p>

                    <strong>Runtime:</strong>
                    <p className="moviedescription-info">{props.runtime} mins</p>
                </div>
                <div className="col-7">
                    <strong>Production:</strong>
                    <p className="moviedescription-info">Paramount Pictures</p>

                    <strong>Burget:</strong>
                    <p className="moviedescription-info">{props.budget.toLocaleString()}</p>

                    <strong>Revenue:</strong>
                    <p className="moviedescription-info">{props.revenue.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDescriptionInformations;