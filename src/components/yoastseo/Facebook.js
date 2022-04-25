import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const Facebook = ({ url, name, type, image, locale, seoData }) => {
    const {
        opengraphTitle,
        opengraphDescription,
    } = seoData
    return (
        <Helmet>
            {name && <meta property="og:site_name" content={name} />}
            <meta property="og:locale" content={locale} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={opengraphTitle} />
            <meta property="og:description" content={opengraphDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={opengraphDescription} />
        </Helmet>
    )
}

export default Facebook

Facebook.propTypes = {
    url: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    type: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    seoData: PropTypes.object
}

Facebook.defaultProps = {
    type: 'website',
    name: null,
}
