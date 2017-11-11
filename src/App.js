import React, {Component} from 'react';
import Config from "./config";
import {debounce} from "throttle-debounce";
import './styles/styles.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDescription from "./components/MovieDescription";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autocompleteSuggestions: {},
            movieDetails: {
                "adult": false,
                "backdrop_path": "/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
                "belongs_to_collection": {
                    "id": 748,
                    "name": "X-Men Collection",
                    "poster_path": "/1Zo4J5SAni8lyXt7NxJwJZ0f0ip.jpg",
                    "backdrop_path": "/Abnosho2v3bcdvDww6T7Hfeczm1.jpg"
                },
                "budget": 250000000,
                "genres": [{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {
                    "id": 14,
                    "name": "Fantasy"
                }, {"id": 878, "name": "Science Fiction"}],
                "homepage": "http://www.x-menmovies.com/",
                "id": 127585,
                "imdb_id": "tt1877832",
                "original_language": "en",
                "original_title": "X-Men: Days of Future Past",
                "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
                "popularity": 20.704433,
                "poster_path": "/giUK8ppRbfistadVzHtpainkhq4.jpg",
                "production_companies": [{
                    "name": "Twentieth Century Fox Film Corporation",
                    "id": 306
                }, {"name": "Donners' Company", "id": 431}, {
                    "name": "Marvel Entertainment",
                    "id": 7505
                }, {"name": "Bad Hat Harry Productions", "id": 9168}, {
                    "name": "TSG Entertainment",
                    "id": 22213
                }, {"name": "Down Productions", "id": 37336}, {"name": "Revolution Sun Studios", "id": 76043}],
                "production_countries": [{"iso_3166_1": "GB", "name": "United Kingdom"}, {
                    "iso_3166_1": "US",
                    "name": "United States of America"
                }],
                "release_date": "2014-05-15",
                "revenue": 747862775,
                "runtime": 131,
                "spoken_languages": [{"iso_639_1": "en", "name": "English"}],
                "status": "Released",
                "tagline": "To save the future, they must alter the past",
                "title": "X-Men: Days of Future Past",
                "video": false,
                "vote_average": 7.5,
                "vote_count": 6355
            }
        };

        this.fetchMoviesList = debounce(500, this.fetchMoviesList);
        this.fetchMovie = this.fetchMovie.bind(this);
    }

    //Method to fetch movie information
    fetchMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Config.apiKey}&language=en-US`)
            .then(response => response.json())
            .then(json => this.setState({movieDetails: json}))
    }

    //Method to fetch movies list
    fetchMoviesList(keyWord) {
        keyWord.length > 0 ? (
            fetch(`http://api.themoviedb.org/3/search/movie?api_key=${Config.apiKey}&query=${keyWord}`)
                .then(response => response.json())
                .then(json => {
                    json.results = json.results
                        .sort((a, b) =>
                            (a.vote_count > b.vote_count) ? -1 : 1);
                    this.setState({autocompleteSuggestions: json});
                })
        ) : this.setState({autocompleteSuggestions: Object.assign({})});
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });

        this.fetchMoviesList(e.target.value);
    };

    // adult: false
    // backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg"
    // belongs_to_collection: null
    // budget: 165000000
    // genres: [{id: 12, name: "Adventure"}, {id: 18, name: "Drama"}, {id: 878, name: "Science Fiction"}]
    // homepage: "http://www.interstellarmovie.net/"
    // id: 157336
    // imdb_id: "tt0816692"
    // original_language: "en"
    // original_title: "Interstellar"
    // overview: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
    // popularity: 29.628957
    // poster_path: "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"
    // production_companies: [{name: "Paramount Pictures", id: 4}, {name: "Legendary Pictures", id: 923},…]
    // production_countries: [{iso_3166_1: "CA", name: "Canada"}, {iso_3166_1: "US", name: "United States of America"},…]
    // release_date: "2014-11-05"
    // revenue: 675120017
    // runtime: 169
    // spoken_languages: [{iso_639_1: "en", name: "English"}]
    // status: "Released"
    // tagline: "Mankind was born on Earth. It was never meant to die here."
    // title: "Interstellar"
    // video: false
    // vote_average: 8.1
    // vote_count: 11616

    render() {
        return (
            <div className="App">
                <Header
                    autocompleteSuggestions={this.state.autocompleteSuggestions}
                    handleChange={this.handleChange.bind(this)}
                    handleMovieChange={this.fetchMovie}/>
                <MovieDescription
                    movieDetails={this.state.movieDetails}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
