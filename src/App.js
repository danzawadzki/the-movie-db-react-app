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
            autocompleteSuggestions: {
                "page": 1,
                "total_results": 36,
                "total_pages": 2,
                "results": [{
                    "vote_count": 4985,
                    "id": 246655,
                    "video": false,
                    "vote_average": 6.4,
                    "title": "X-Men: Apocalypse",
                    "popularity": 24.783044,
                    "poster_path": "\/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Apocalypse",
                    "genre_ids": [878],
                    "backdrop_path": "\/oQWWth5AOtbWG9o8SCAviGcADed.jpg",
                    "adult": false,
                    "overview": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
                    "release_date": "2016-05-18"
                }, {
                    "vote_count": 0,
                    "id": 320288,
                    "video": false,
                    "vote_average": 0,
                    "title": "X-Men: Dark Phoenix",
                    "popularity": 18.67044,
                    "poster_path": "\/b3wR7lmidhv1xYz6i50XI6NcOV1.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Dark Phoenix",
                    "genre_ids": [28, 878],
                    "backdrop_path": "\/fvOqGzF47XRSRQUMHxwMIrMzl16.jpg",
                    "adult": false,
                    "overview": "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!",
                    "release_date": "2018-10-31"
                }, {
                    "vote_count": 6327,
                    "id": 127585,
                    "video": false,
                    "vote_average": 7.5,
                    "title": "X-Men: Days of Future Past",
                    "popularity": 21.704433,
                    "poster_path": "\/giUK8ppRbfistadVzHtpainkhq4.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Days of Future Past",
                    "genre_ids": [28, 12, 14, 878],
                    "backdrop_path": "\/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
                    "adult": false,
                    "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
                    "release_date": "2014-05-15"
                }, {
                    "vote_count": 4309,
                    "id": 36657,
                    "video": false,
                    "vote_average": 6.8,
                    "title": "X-Men",
                    "popularity": 1.948628,
                    "poster_path": "\/k01Q6ATbfzNJgw4Zuoj0LTY3T9x.jpg",
                    "original_language": "en",
                    "original_title": "X-Men",
                    "genre_ids": [12, 28, 878],
                    "backdrop_path": "\/xm75A18CE7Wc6J9k2ZidFyqJ6rX.jpg",
                    "adult": false,
                    "overview": "Two mutants, Rogue and Wolverine, come to a private academy for their kind whose resident superhero team, the X-Men, must oppose a terrorist organization with similar powers.",
                    "release_date": "2000-07-13"
                }, {
                    "vote_count": 18,
                    "id": 447161,
                    "video": true,
                    "vote_average": 6.9,
                    "title": "X-Men: Reunited",
                    "popularity": 2.528846,
                    "poster_path": "\/xc0pn9DpsXNdVwnJiTyYdpERMx.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Reunited",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "This making-of piece looks at the genesis of this project and how Singer wanted to reunite the original cast again.",
                    "release_date": "2014-11-14"
                }, {
                    "vote_count": 12,
                    "id": 37713,
                    "video": false,
                    "vote_average": 7.2,
                    "title": "X-Men: Pryde of the X-Men",
                    "popularity": 2.334952,
                    "poster_path": "\/208meMFoKbMGyho4HJ85h7wRdmD.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Pryde of the X-Men",
                    "genre_ids": [16, 28],
                    "backdrop_path": "\/qaxuPRmM8MnYBDCWbZXxQ80RpVv.jpg",
                    "adult": false,
                    "overview": "Pryde of the X-Men was a short-lived series about the X-Men, with the main character being Kitty Pryde (whose alias is Shadow Cat, though she never becomes Shadow Cat in the series), which is why the series is titled Pryde of the X-Men. The show was produced by Marvel Productions and Sunbow Productions, who made a pilot for NBC. The pilot aired, but for unknown reasons, it was never turned into a full-blown series. Despite it not becoming a full series, the pilot has aired in syndication, and was later released on video.",
                    "release_date": "1989-07-01"
                }, {
                    "vote_count": 5,
                    "id": 447162,
                    "video": true,
                    "vote_average": 6.4,
                    "title": "X-Men: Unguarded",
                    "popularity": 2.09595,
                    "poster_path": null,
                    "original_language": "en",
                    "original_title": "X-Men: Unguarded",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "The film's all-star ensemble cast joins director Bryan Singer and screenwriter Simon Kinberg to share their favorite stories from the set.",
                    "release_date": "2015-07-14"
                }, {
                    "vote_count": 4173,
                    "id": 2080,
                    "video": false,
                    "vote_average": 6.2,
                    "title": "X-Men Origins: Wolverine",
                    "popularity": 2.636205,
                    "poster_path": "\/kqO36IYvWbRKMPiUeiVZUFH06Rc.jpg",
                    "original_language": "en",
                    "original_title": "X-Men Origins: Wolverine",
                    "genre_ids": [12, 28, 53, 878],
                    "backdrop_path": "\/mEuDxpLNBCarVgXRqDznHT7bdS8.jpg",
                    "adult": false,
                    "overview": "After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine.",
                    "release_date": "2009-04-28"
                }, {
                    "vote_count": 0,
                    "id": 340102,
                    "video": false,
                    "vote_average": 0,
                    "title": "The New Mutants",
                    "popularity": 5.631862,
                    "poster_path": "\/9R6NT7GFfnWyIU76Bp0pqWokgDd.jpg",
                    "original_language": "en",
                    "original_title": "The New Mutants",
                    "genre_ids": [28, 12, 27, 878],
                    "backdrop_path": "\/FfvJpsj3yEBodMpV5WF11GWN6b.jpg",
                    "adult": false,
                    "overview": "The story of the New Mutants, a team of mutant heroes comprised of the first graduates from Charles Xavier's school.",
                    "release_date": "2018-04-12"
                }, {
                    "vote_count": 5409,
                    "id": 49538,
                    "video": false,
                    "vote_average": 7.1,
                    "title": "X-Men: First Class",
                    "popularity": 1.874391,
                    "poster_path": "\/7SSm7BfzFoVzmd6fCDccj7qRxc8.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: First Class",
                    "genre_ids": [28, 878, 12],
                    "backdrop_path": "\/39nstYsfjR6ggyKTtB4Joga2fs8.jpg",
                    "adult": false,
                    "overview": "Before Charles Xavier and Erik Lensherr took the names Professor X and Magneto, they were two young men discovering their powers for the first time. Before they were arch-enemies, they were closest of friends, working together with other mutants (some familiar, some new), to stop the greatest threat the world has ever known.",
                    "release_date": "2011-05-24"
                }, {
                    "vote_count": 3675,
                    "id": 36658,
                    "video": false,
                    "vote_average": 6.8,
                    "title": "X2",
                    "popularity": 1.611736,
                    "poster_path": "\/8TAPuoephNAiRGgBobP4xQl0QGK.jpg",
                    "original_language": "en",
                    "original_title": "X2",
                    "genre_ids": [12, 28, 878, 53],
                    "backdrop_path": "\/u2FxA8fDt0uQAnHKTwWGgkPShoL.jpg",
                    "adult": false,
                    "overview": "Professor Charles Xavier and his team of genetically gifted superheroes face a rising tide of anti-mutant sentiment led by Col. William Stryker. Storm, Wolverine and Jean Grey must join their usual nemeses –  Magneto and Mystique – to unhinge Stryker's scheme to exterminate all mutants.",
                    "release_date": "2003-04-24"
                }, {
                    "vote_count": 2,
                    "id": 81946,
                    "video": false,
                    "vote_average": 7,
                    "title": "X-Men: Production Scrapbook",
                    "popularity": 2.584384,
                    "poster_path": "\/iN9DjcdY90ytdn63MHawSRv1fTl.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Production Scrapbook",
                    "genre_ids": [99],
                    "backdrop_path": "\/bk3mL984lTBwsjS5FJ1pkRPMW0w.jpg",
                    "adult": false,
                    "overview": "",
                    "release_date": "2000-11-02"
                }, {
                    "vote_count": 7,
                    "id": 447167,
                    "video": true,
                    "vote_average": 5.1,
                    "title": "X-Men: Apocalypse Unearthed",
                    "popularity": 1.898231,
                    "poster_path": null,
                    "original_language": "en",
                    "original_title": "X-Men: Apocalypse Unearthed",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "A six-part documentary. We get info about examines story\/character areas and connections to other movies, cast and performances, costumes, makeup and effects, stunts\/action, production design and photography, and general thoughts.",
                    "release_date": "2016-11-04"
                }, {
                    "vote_count": 2,
                    "id": 256361,
                    "video": false,
                    "vote_average": 5.5,
                    "title": "Astonishing X-Men: Gifted",
                    "popularity": 1.889778,
                    "poster_path": "\/4Y8iRMmAhTHxZeCTqJeuiXhn0NW.jpg",
                    "original_language": "en",
                    "original_title": "Astonishing X-Men: Gifted",
                    "genre_ids": [16, 28, 878],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "Facing a powerful new enemy, the team of mutant superheroes find themselves further imperiled when a \"cure\" for mutants is discovered.",
                    "release_date": "2010-09-28"
                }, {
                    "vote_count": 8,
                    "id": 447399,
                    "video": true,
                    "vote_average": 6,
                    "title": "X-Men: The Mutant Watch",
                    "popularity": 1.825714,
                    "poster_path": "\/2BSZiURkEKgpNLIPjIRUEw3pASh.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: The Mutant Watch",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "While Senator Kelly addresses a senate committee about the supposed mutant menace, we learn about the making of the movie, X-Men.",
                    "release_date": "2000-07-02"
                }, {
                    "vote_count": 3684,
                    "id": 36668,
                    "video": false,
                    "vote_average": 6.3,
                    "title": "X-Men: The Last Stand",
                    "popularity": 1.608884,
                    "poster_path": "\/9jsW4RurucTwCEtA5iWV2PmIv11.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: The Last Stand",
                    "genre_ids": [12, 28, 878, 53],
                    "backdrop_path": "\/w3Yc8wi2jYLaOyCW6b6svf1B0MG.jpg",
                    "adult": false,
                    "overview": "When a cure is found to treat mutations, lines are drawn amongst the X-Men and The Brotherhood, a band of powerful mutants organized under Xavier's former ally, Magneto.",
                    "release_date": "2006-05-24"
                }, {
                    "vote_count": 1,
                    "id": 266843,
                    "video": false,
                    "vote_average": 10,
                    "title": "Astonishing X-Men: Dangerous",
                    "popularity": 1.661725,
                    "poster_path": "\/4HDOp9HYxqx6M71ijwGByrpGQ9z.jpg",
                    "original_language": "en",
                    "original_title": "Astonishing X-Men: Dangerous",
                    "genre_ids": [16],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "The tragic death of a student at the Xavier Institute reveals that a powerful enemy is working from inside the mansion to destroy the X-Men, an enemy who knows all their weaknesses and can predict their every move. This new foe doesn’t want wealth, power or world domination: it only wants them dead. As the X-Men fight for their lives, they learn they’ve been deceived by one of their own . . . even if they survive, the team will never be the same.",
                    "release_date": "2012-04-10"
                }, {
                    "vote_count": 2,
                    "id": 447143,
                    "video": true,
                    "vote_average": 5.5,
                    "title": "X-Men: The Excitement Continues",
                    "popularity": 1.660427,
                    "poster_path": "\/9o33R2EUkgBOIfODaarcfRO2VM1.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: The Excitement Continues",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "A behind the scenes look at the making of X-men: The Last Stand.",
                    "release_date": "2006-10-02"
                }, {
                    "vote_count": 3,
                    "id": 447102,
                    "video": true,
                    "vote_average": 6.7,
                    "title": "X-Men: The Uncanny Suspects",
                    "popularity": 1.428994,
                    "poster_path": "\/iRMG0GdJYUNBV2JBU2218Pf0Ujt.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: The Uncanny Suspects",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "The short documentary about X-Men movie is featured on the X-Men 1.5 DVD.",
                    "release_date": "2003-02-11"
                }, {
                    "vote_count": 3,
                    "id": 447141,
                    "video": true,
                    "vote_average": 6,
                    "title": "X-Men: Evolution of a Trilogy",
                    "popularity": 1.485008,
                    "poster_path": "\/h5DFh6Jk09vtoIh9NEzsmXxvPO1.jpg",
                    "original_language": "en",
                    "original_title": "X-Men: Evolution of a Trilogy",
                    "genre_ids": [99],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "A behind the scenes look at the making of the X-Men trilogy made up out of interviews shot during the production of all three films.",
                    "release_date": "2006-10-02"
                }]
            }
        };

        this.fetchMoviesList = debounce(500, this.fetchMoviesList);
        this.fetchMovie = this.fetchMovie.bind(this);
    }

    //Method to fetch movie information
    fetchMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Config.apiKey}&language=en-US`)
            .then(response => response.json)
            .then(json => console.log(json))
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
                    handleChange={this.handleChange.bind(this)}/>
                <MovieDescription/>
                <Footer/>
            </div>
        )
    }
}

export default App;
