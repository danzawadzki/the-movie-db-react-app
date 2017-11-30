import PropTypes from "prop-types";
import React from "react";
<<<<<<< HEAD
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
=======
>>>>>>> dbf878e911436874dea4a740ce7f04d4f71ac082
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