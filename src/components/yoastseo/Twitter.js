import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const Twitter = ({ type, username, image, seoData }) => {
    const {
        twitterDescription,
        twitterTitle,
    } = seoData
    return (
        <Helmet>
            {username && <meta name="twitter:creator" content={username} />}
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={twitterTitle} />
            <meta name="twitter:description" content={twitterDescription} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={twitterDescription} />
        </Helmet>
    )
}

export default Twitter

Twitter.propTypes = {
    type: PropTypes.string,
    username: PropTypes.string,
    image: PropTypes.string.isRequired,
    seoData: PropTypes.object
}

Twitter.defaultProps = {
    type: 'summary_large_image',
    username: null,
}