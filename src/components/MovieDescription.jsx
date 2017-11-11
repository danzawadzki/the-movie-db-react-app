import React from "react";
import MovieDescriptionCover from "./MovieDescriptionCover";
import MovieDescriptionInformations from "./MovieDescriptionInformations";

const MovieDescription = props => {

    // const example = {
    //     "adult": false,
    //     "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
    //     "belongs_to_collection": {
    //         "id": 748,
    //         "name": "X-Men Collection",
    //         "poster_path": "/1Zo4J5SAni8lyXt7NxJwJZ0f0ip.jpg",
    //         "backdrop_path": "/Abnosho2v3bcdvDww6T7Hfeczm1.jpg"
    //     },
    //     "budget": 250000000,
    //     "genres": [{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {
    //         "id": 14,
    //         "name": "Fantasy"
    //     }, {"id": 878, "name": "Science Fiction"}],
    //     "homepage": "http://www.x-menmovies.com/",
    //     "id": 127585,
    //     "imdb_id": "tt1877832",
    //     "original_language": "en",
    //     "original_title": "X-Men: Days of Future Past",
    //     "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
    //     "popularity": 20.704433,
    //     "poster_path": "/giUK8ppRbfistadVzHtpainkhq4.jpg",
    //     "production_companies": [{
    //         "name": "Twentieth Century Fox Film Corporation",
    //         "id": 306
    //     }, {"name": "Donners' Company", "id": 431}, {
    //         "name": "Marvel Entertainment",
    //         "id": 7505
    //     }, {"name": "Bad Hat Harry Productions", "id": 9168}, {
    //         "name": "TSG Entertainment",
    //         "id": 22213
    //     }, {"name": "Down Productions", "id": 37336}, {"name": "Revolution Sun Studios", "id": 76043}],
    //     "production_countries": [{"iso_3166_1": "GB", "name": "United Kingdom"}, {
    //         "iso_3166_1": "US",
    //         "name": "United States of America"
    //     }],
    //     "release_date": "2014-05-15",
    //     "revenue": 747862775,
    //     "runtime": 131,
    //     "spoken_languages": [{"iso_639_1": "en", "name": "English"}],
    //     "status": "Released",
    //     "tagline": "To save the future, they must alter the past",
    //     "title": "X-Men: Days of Future Past",
    //     "video": false,
    //     "vote_average": 7.5,
    //     "vote_count": 6355
    // }
    return (
        <content>
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-xs-12 col-md-3 text-center">
                        <MovieDescriptionCover
                            posterPath={props.movieDetails.poster_path}/>
                    </div>
                    <div className="offset-md-1 col-xs-12 col-md-6">
                        <MovieDescriptionInformations
                            title={props.movieDetails.title}
                            runtime={props.movieDetails.runtime}
                            revenue={props.movieDetails.revenue}
                            budget={props.movieDetails.budget}
                            overview={props.movieDetails.overview}
                            releaseDate={props.movieDetails.release_date}
                            autocompleteSuggestions={props.autocompleteSuggestions}/>
                    </div>
                </div>
            </div>
        </content>
    )
}

export default MovieDescription;