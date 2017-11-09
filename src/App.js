import React, {Component} from 'react';
import {debounce} from "throttle-debounce";
import './styles/styles.css';

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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="searchengine">
                                <input className="searchengine-input"
                                       onChange={this.handleChange.bind(this)}
                                       id="keyWord"/>
                                <div className="searchengine-autocomplete">
                                    {this.state.data.results ? this.state.data.results.splice(0,10).map((movie, index) =>
                                        <div key={`autocomplete-option-${index}`}
                                             className="searchengine-autocomplete-option"
                                             onClick={() => console.log(movie)}>
                                            <h5>{movie.original_title}</h5>
                                        </div>) : ""}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h1>Test</h1>
                            {/*<table>*/}
                            {/*<tbody>*/}
                            {/*{this.state.data.results ? this.state.data.results.map((movie, index) => <tr*/}
                            {/*key={index}>*/}
                            {/*<td>{movie.original_title}</td>*/}
                            {/*</tr>) : <tr>*/}
                            {/*<td>Empty</td>*/}
                            {/*</tr>}*/}
                            {/*</tbody>*/}
                            {/*</table>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
