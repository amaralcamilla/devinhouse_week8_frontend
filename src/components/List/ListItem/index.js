//5. Crie um componente de lista de contatos. Cada contato deve conter uma props photo, name e description.
import React from "react";
import PropTypes from 'prop-types'

class ListItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.photo} 
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
            </li>
        )
    }
}

ListItem.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ListItem;