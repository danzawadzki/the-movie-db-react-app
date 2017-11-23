import React from "react";

/**
 * Logo for the header (presentational component).
 * @returns {ReactElement || XML}
 */

const HeaderLogo = () => {
    return (
        <img
            src="https://www.themoviedb.org/assets/static_cache/02a9430b88975cae16fcfcc9cf7b5799/images/v4/logos/primary-green.svg"
            alt="TMDb Logo" className="header-logo"/>
    )
};

export default HeaderLogo;