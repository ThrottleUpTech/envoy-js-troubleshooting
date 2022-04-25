import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./styles.scss"
import PropTypes from "prop-types";

const HeroIntro = ({ image , subtitle, title, heroText, ctaButton1, ctaButton1Url, ctaButton2, ctaButton2Url}) => {

    const { localFile, altText } = image ? image : ''

    return (
        <div className="heroIntro">

            <div className="container">
                <div className="col-1-2">
                    <GatsbyImage image={getImage(localFile)} alt={altText} />
                </div>
                <div className="col-1-2">
                    <h1><span>{subtitle}</span><br/>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: heroText }} />
                    <div className="buttonsCTA">
                        { ctaButton1 && ctaButton1Url ? <a href="https://envoy.whole30.com/application/" className="btn btnPrimary">{ctaButton1}</a> : ''}
                        {/* { ctaButton2 && ctaButton2Url ? <a href={ctaButton2Url} className="btn btnSecondary">{ctaButton2}</a> : ''} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroIntro

HeroIntro.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    heroText: PropTypes.string,
    ctaButton1: PropTypes.string,
    ctaButton1Url: PropTypes.string,
    image: PropTypes.shape({}).isRequired,
}