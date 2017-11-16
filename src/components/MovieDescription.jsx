import React from "react";
import MovieDescriptionCover from "./MovieDescriptionCover";
import MovieDescriptionInformations from "./MovieDescriptionInformation";

/*
 *
 * Movie Description Component
 * Contains two child components: Cover and Information
 *
 */

const MovieDescription = props => {
    return (
        <content>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <MovieDescriptionCover
                            posterPath={props.movieDetails.poster_path}/>
                    </div>
                    <div className="offset-lg-1 col-12 col-md-6">
                        <MovieDescriptionInformations
                            title={props.movieDetails.title}
                            genres={props.movieDetails.genres}
                            status={props.movieDetails.status}
                            runtime={props.movieDetails.runtime}
                            revenue={props.movieDetails.revenue}
                            budget={props.movieDetails.budget}
                            overview={props.movieDetails.overview}
                            releaseDate={props.movieDetails.release_date}
                            production_companies={props.movieDetails.production_companies}
                            autocompleteSuggestions={props.autocompleteSuggestions}/>
                    </div>
                </div>
            </div>
        </content>
    )
}

export default MovieDescription;