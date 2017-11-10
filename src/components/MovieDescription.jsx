import React from "react";
import MovieDescriptionCover from "./MovieDescriptionCover";
import MovieDescriptionInformations from "./MovieDescriptionInformations";

const MovieDescription = props => {
    return (
        <content>
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-xs-12 col-md-3 text-center">
                        <MovieDescriptionCover/>
                    </div>
                    <div className="offset-md-1 col-xs-12 col-md-6">
                        <MovieDescriptionInformations
                            autocompleteSuggestions={props.autocompleteSuggestions}/>
                    </div>
                </div>
            </div>
        </content>
    )
}

export default MovieDescription;