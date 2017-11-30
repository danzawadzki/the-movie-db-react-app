import PropTypes from "prop-types";
import React from "react";
import "./Header.css";
import SearchBarContainer from "../../containers/SearchBarContainer";
import HeaderLogo from "./HeaderLogo";

/**
 * Header component
 *
 * @param {Object} props
 * @prop {Function} setMovieDescription - Setter for the movie description in the parent component.
 * @returns {ReactElement || XML}
 */

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row pt-5 pb-5 d-flex align-items-center">
                    <div className="offset-md-1 col-3 col-md-2">
                        <HeaderLogo/>
                    </div>

                    <div className="col-9 col-md-7">
                        <SearchBarContainer
                            setMovieDescription={props.setMovieDescription}/>
                    </div>
                </div>
            </div>
        </header>
    )
};

/** PropTypes */
Header.propTypes = {
    setMovieDescription: PropTypes.func.isRequired
};

export default Header;