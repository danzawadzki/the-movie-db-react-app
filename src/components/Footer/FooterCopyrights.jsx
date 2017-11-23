import React from "react";

/**
 * Footer Copyrights presentational component
 * @returns {ReactElement || XML}
 */

const FooterCopyrights = () => {
    return (
        <div>
            <p className="mb-0">
                Made with <i className="fa fa-heart" aria-hidden="true"/> by
                <a href="https://github.com/danzawadzki"> Daniel Zawadzki</a>
            </p>
            <p className="footer-smaller">
                <small>
                    Big thanks to the TMDb for giving me access to their API.
                </small>
            </p>
        </div>
    )
};

export default FooterCopyrights;