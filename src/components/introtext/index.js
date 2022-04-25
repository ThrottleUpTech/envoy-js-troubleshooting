import React from 'react'
import PropTypes from "prop-types";
import "./styles.scss"

const IntroText = ({  intro, squareText }) => {

    return (
    <section className="intro">
        <div className="container">
            <div dangerouslySetInnerHTML={{__html: intro }} />
            <p className="blocktext" dangerouslySetInnerHTML={{__html: squareText }} />
        </div>
    </section>
    )
}

export default IntroText


IntroText.propTypes = {
    intro: PropTypes.string,
    squareText: PropTypes.string,
}