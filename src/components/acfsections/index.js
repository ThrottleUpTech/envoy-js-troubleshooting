import React from 'react'
import PropTypes from 'prop-types'

const ACFSections = ({ blocks, ModelView }) => {
    return (
        blocks && ModelView && blocks.map((block, index) => {
            if (typeof block?.__typename !== "undefined") {
                if (typeof ModelView[block?.__typename] !== "undefined") {
                    const ACFComponent = ModelView[block?.__typename]
                    return <ACFComponent key={index} {...block} />
                }
            }
            return null
        })
    )
}

export default ACFSections

ACFSections.propTypes = {
    blocks: PropTypes.array,
    ModelView: PropTypes.object,
}
