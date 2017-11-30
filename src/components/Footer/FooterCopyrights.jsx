import React from "react";

/**
 * Footer Copyrights presentational component
 * @returns {ReactElement || XML}
 */

const FooterCopyrights = () => {
    return (
        <div>

            <p className="footer__copyrights footer__copyrights--marginBottom">
                Made with <i className="fa fa-heart" aria-hidden="true"/> by
                <a href="https://github.com/danzawadzki"> Daniel Zawadzki</a>
            </p>

            <p className="footer__subCopyrights footer__subCopyrights--lighter">
                Big thanks to the TMDb for giving me access to their API.
            </p>
        </div>
    )
};

export default FooterCopyrights;