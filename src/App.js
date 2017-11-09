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
    }

    // componentWillMount() {
    //     fetch("http://api.themoviedb.org/3/search/movie?api_key=cda6dc540fff812dc71561b7f17d7a65&query=nemo")
    //         .then(response => response.json())
    //         .then(json => this.setState({data: json}));
    // }

    fetchMoviesList(keyWord) {
        if (keyWord) {
            fetch("http://api.themoviedb.org/3/search/movie?api_key=cda6dc540fff812dc71561b7f17d7a65&query=" + keyWord)
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
                                    {this.state.data.results ? this.state.data.results.map((movie, index) =>
                                        <div
                                            className="searchengine-autocomplete-option">{movie.original_title}</div>) : ""}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
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
