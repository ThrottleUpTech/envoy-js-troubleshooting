import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./styles.scss"
import PropTypes from "prop-types";

const CtaBanner = ({ image, subtitle, title , ctaText, buttonText, buttonUrl}) => {
    const { localFile, altText } = image ? image : ''
    return (
        <div className="ctaBanner">
            <div className="container">
                <div className="col-1-3">
                    <GatsbyImage image={getImage(localFile)} alt={altText} />
                </div>
                <div className="col-2-3">
                    <h3><span>{subtitle}</span><br />{title}</h3>
                    <p>{ctaText}</p>
                    <a href="https://envoy.whole30.com/application/" className="btn btnSecondary">{buttonText}</a>
                </div>
            </div>
        </div>
    )
}

export default CtaBanner

CtaBanner.propTypes = {
    image: PropTypes.shape({}).isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    ctaText: PropTypes.string,
}
