import React from 'react'
import PropTypes from "prop-types";
import {StaticImage} from "gatsby-plugin-image";

const Nav = ({siteTitle}) => {
    return (
        <a role="button" aria-label="Go to Homepage" href={"/"}><StaticImage quality="95" placeholder="tracedSVG" src="./../../images/envoyLogo.png" alt={siteTitle}/></a>
    )
}

export default Nav

Nav.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

