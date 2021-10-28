import React from 'react'
import propTypes from 'prop-types'

class PostContent extends React.Component {
    render() {
        return (
            <>
            <p>{this.props.postText}Texto do post</p>
            {this.props.postPhoto}
            </>
        )
    }
}
PostContent.propTypes = {
    postText: propTypes.string.isRequired,
    postPhoto: propTypes.string,
}

export default PostContent;