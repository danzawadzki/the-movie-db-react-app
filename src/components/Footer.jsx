import React from "react"

const footer = props => {
    return (
        <footer>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col text-center">
                        <p className="mb-0">
                            Made with <i className="fa fa-heart" aria-hidden="true"/> by
                            <a href="https://github.com/danzawadzki"> Daniel Zawadzki</a>
                        </p>
                        <p className="footer-smaller">
                            <small>
                                I thank TMDb for giving me access to their API.
                            </small>
                        </p>


                    </div>
                </div>
            </div>
        </footer>
    )
};

export default footer;