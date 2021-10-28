import React from 'react'
import propTypes from 'prop-types'

class PostHeader extends React.Component {
    render() {
        return (
            <>
            {this.props.photo}
            <h2>{this.props.name}</h2>
            <p>{this.props.time}</p>   
            <button>. . .</button>
            </>
        )
    }
}
PostHeader.propTypes = {
    photo: propTypes.string,
    name: propTypes.string.isRequired,
    time: propTypes.string,
}

export default PostHeader;