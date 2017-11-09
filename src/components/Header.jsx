import React from "react";

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
                        <div className="input-group">
                                    <span className="searchengine-icon">
                                        <i className="fa fa-search btn" aria-hidden="true"/>
                                    </span>
                            <input type="text"
                                   onChange={props.onChange}
                                   className="form-control"
                                   placeholder="Search for..."
                                   aria-label="Search for..."/>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
};

export default header;