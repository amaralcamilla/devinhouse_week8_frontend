import React from 'react'
import propTypes from 'prop-types'

class Reactions extends React.Component {
    render() {
        return (
            <>
            <button>❤️</button>
            <p>{this.props.comments} Comments</p>
            <button>Share</button>
            <span>Liked by {this.props.userLike} & {this.props.likes} others</span>
            </>
        )
    }
}
Reactions.propTypes = {
    comments: propTypes.number.isRequired,
    userLike: propTypes.string,
    likes: propTypes.number.isRequired,
}

export default Reactions;