//4. Crie um componente de botão com as props background (Cor de fundo do botão) e title (Texto do botão).

import React from 'react'
import propTypes from 'prop-types'

class TheButton extends React.Component {
    render () {
        return (
        <button style={{background = this.props.color}}>{this.props.title}</button>
        )
    }
}
TheButton.propTypes = {
    title: propTypes.string.isRequired,
}
export default TheButton