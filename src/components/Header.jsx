import React from "react";
import SearchEngine from "./SearchEngine";

const header = props => {
    return (
        <header className="header">
            <div className="container">
                <div className="row pt-5 pb-5 d-flex align-items-center">
                    <div className="col-xs-2 col-md-2">
                        <img
                            src="https://www.themoviedb.org/assets/static_cache/02a9430b88975cae16fcfcc9cf7b5799/images/v4/logos/primary-green.svg"
                            alt="" className="header-logo"/>
                    </div>

                    <div className="col-xs-12 col-md-8">
                        <SearchEngine
                            autocompleteSuggestions={props.autocompleteSuggestions}
                            handleMovieChange={props.handleMovieChange}
                            handleChange={props.handleChange}/>
                    </div>

                </div>
            </div>
        </header>
    )
};

export default header;