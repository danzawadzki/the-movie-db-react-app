import React from "react";

const MovieDescriptionInformations = props => {
    return (
        <div>
            <h1 className="mb-0">Śmierć nadejdzie dziś (2017)</h1>
            <p className="mb-3">Adventure, Drama, Science Fiction</p>
            <strong>Description:</strong>
            <p>Studentka college’u (znana z „La La Land” Jessica Rothe) każdego dnia na nowo budzi
                się w dniu swojej śmierci, powoli odkrywając niezwykłe szczegóły przyczyn zabójstwa,
                by wreszcie odkryć tożsamość mordercy i jego motywy.</p>
            <div className="row pt-3">
                <div className="col-5">
                    <strong>Release Date:</strong>
                    <p className="moviedescription-info">2014-05-11</p>

                    <strong>Status:</strong>
                    <p className="moviedescription-info">Released</p>

                    <strong>Runtime:</strong>
                    <p className="moviedescription-info">169mins</p>
                </div>
                <div className="col-7">
                    <strong>Production:</strong>
                    <p className="moviedescription-info">Paramount Pictures</p>

                    <strong>Burget:</strong>
                    <p className="moviedescription-info">132,000,000</p>

                    <strong>Revenue:</strong>
                    <p className="moviedescription-info">675,120,017</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDescriptionInformations;