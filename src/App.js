import React, {Component} from 'react';
import {debounce} from "throttle-debounce";
import './styles/styles.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.fetchMoviesList = debounce(500, this.fetchMoviesList);
        this.fetchMovie = this.fetchMovie.bind(this);
    }

    // componentWillMount() {
    //     fetch("http://api.themoviedb.org/3/search/movie?api_key=cda6dc540fff812dc71561b7f17d7a65&query=nemo")
    //         .then(response => response.json())
    //         .then(json => this.setState({data: json}));
    // }

    fetchMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cda6dc540fff812dc71561b7f17d7a65&query=&language=en-US`)
            .then(response => response.json)
            .then(json => console.log(json))
    }

    fetchMoviesList(keyWord) {
        if (keyWord) {
            fetch(`http://api.themoviedb.org/3/search/movie?api_key=cda6dc540fff812dc71561b7f17d7a65&query=${keyWord}`)
                .then(response => response.json())
                .then(json => {
                    json.results = json.results
                        .sort((a, b) =>
                            (a.vote_count > b.vote_count) ? -1 : 1);
                    console.log(json.results);
                    this.setState({data: json})
                });
        } else {
            this.setState({data: Object.assign({})})
        }

        console.log(this.state.data)
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });

        this.fetchMoviesList(e.target.value);
    };

    render() {
        return (
            <div className="App">
                <Header
                    onChange={this.handleChange.bind(this)}/>
                <content>
                    <div className="container">
                        <div className="row">
                            <div className="offset-md-1 col-xs-12 col-md-3 text-center">
                                <img
                                    src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/zSouWWrySXshPCT4t3UKCQGayyo.jpg"
                                    className="moviedescription-cover-image"
                                    alt=""/>
                            </div>
                            <div className="offset-md-1 col-xs-12 col-md-6">
                                <h1>Śmierć nadejdzie dziś (2017)</h1>
                                <strong>Description</strong>
                                <p>Studentka college’u (znana z „La La Land” Jessica Rothe) każdego dnia na nowo budzi
                                    się w dniu swojej śmierci, powoli odkrywając niezwykłe szczegóły przyczyn zabójstwa,
                                    by wreszcie odkryć tożsamość mordercy i jego motywy.</p>
                            </div>
                        </div>
                    </div>
                </content>
                <Footer/>

                {/*<div className="App">*/}
                {/*<div className="container">*/}
                {/*<div className="row">*/}
                {/*<div className="col">*/}
                {/*<div className="searchengine">*/}
                {/*<input className="searchengine-input"*/}
                {/*onChange={this.handleChange.bind(this)}*/}
                {/*id="keyWord"/>*/}
                {/*<div className="searchengine-autocomplete">*/}
                {/*{this.state.data.results ? this.state.data.results.splice(0, 10).map((movie, index) =>*/}
                {/*<div key={`autocomplete-option-${index}`}*/}
                {/*className="searchengine-autocomplete-option d-flex"*/}
                {/*onClick={() => console.log(movie)}>*/}
                {/*<div className="searchengine-autocomplete-option-cover">*/}
                {/*<img width={20}*/}
                {/*src={`https://image.tmdb.org/t/p/w92_and_h138_bestv2${movie.poster_path}`}/>*/}
                {/*</div>*/}
                {/*<div className="searchengine-autocomplete-option-desc">*/}
                {/*<h>{movie.original_title} ({movie.release_date.split("-")[0]})</h>*/}
                {/*</div>*/}
                {/*</div>) : ""}*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*<div className="col">*/}
                {/*<h1>Test</h1>*/}
                {/*/!*<table>*!/*/}
                {/*/!*<tbody>*!/*/}
                {/*/!*{this.state.data.results ? this.state.data.results.map((movie, index) => <tr*!/*/}
                {/*/!*key={index}>*!/*/}
                {/*/!*<td>{movie.original_title}</td>*!/*/}
                {/*/!*</tr>) : <tr>*!/*/}
                {/*/!*<td>Empty</td>*!/*/}
                {/*/!*</tr>}*!/*/}
                {/*/!*</tbody>*!/*/}
                {/*/!*</table>*!/*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        )
            ;
    }
}

export default App;
