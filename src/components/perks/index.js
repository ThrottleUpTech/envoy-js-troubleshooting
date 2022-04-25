import React from 'react'
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./styles.scss"

const Perks = ({  title, subtext, perkList, buttonText, buttonUrl }) => {

    const PerkList = perkList.map(({ title, subtext, image }, index) =>
        <div key={index} className="benefitBlock">
            <div className="col-1-3">
                { image ? <GatsbyImage image={getImage(image.localFile)} alt={image.altText} placeholder="tracedSVG" /> : ''}
            </div>
            <div className="col-2-3">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: subtext }} />
            </div>
        </div>
    );

    return (
        <section className="envoyBenefits" id="perks">
            {/* <StaticImage quality="95" className="bgImage" src="../../images/bg-marble.jpg" alt="" /> */}
            <div className="container">
                <h2>{ title }</h2>
                <p>{ subtext }</p>
                <div className="benefitBlocks">
                    {PerkList}
                </div>
                <div className="buttonsCTA">
                    {buttonText && buttonUrl ? <a href="https://envoy.whole30.com/application/" className="btn btnPrimary">{buttonText}</a> : ''}
                </div>
            </div>
        </section>

    )
}

export default Perks

Perks.propTypes = {
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired,
    perkList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtext: PropTypes.string.isRequired,
        image: PropTypes.shape({}),
    })).isRequired
}