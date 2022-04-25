import React from 'react'
import { GatsbyImage, getImage , StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby"
import "./styles.scss"
import PropTypes from "prop-types";

const BrandPartners = ({ title, subtitle, squareText, envoyList, button1Text, button1Url, button2Url, button2Text }) => {
    const EnvoyList = envoyList.map(({ envoy }, index) =>
        <div className="partnerBlock" key={index}>
            <Link to={envoy.link}>
            {envoy.envoyFields.profileImage ? <GatsbyImage image={getImage(envoy.envoyFields.profileImage.localFile)} alt={envoy.envoyFields.profileImage.altText}  placeholder="tracedSVG" /> : ''}
            <p>{envoy.title}</p>
            </Link>
        </div>
    );
    return (
        <section className="brandPartners">
            <StaticImage quality="95" className="bgImage" src="../../images/bg-brandPartners.jpg" alt="" />
            <div className="container">
                <h2>{title}</h2>
                <p>{subtitle}</p><br/>
                <p className="blocktext" dangerouslySetInnerHTML={{__html: squareText }} />
                <div className="brandPartnerList">
                    {EnvoyList}
                </div>
                <div className="buttonsCTA">
                    { button1Text && button1Url ? <a href="https://envoy.whole30.com/application/" className="btn btnPrimary">{button1Text}</a> : ''}
                    {/* { button2Text && button2Url ? <a href={button2Url} className="btn btnSecondary">{button2Text}</a> : ''} */}
                </div>
            </div>
        </section>
    )
}

export default BrandPartners

BrandPartners.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    squareText: PropTypes.string,
    button1Text: PropTypes.string,
    button1Url: PropTypes.string
}
