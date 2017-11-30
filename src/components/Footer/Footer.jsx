import React from "react"
import "./Footer.css";
import FooterCopyrights from "./FooterCopyrights";

/**
 * Footer presentational component
 * @returns {ReactElement || XML}
 */

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col text-center">
                        <FooterCopyrights/>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;