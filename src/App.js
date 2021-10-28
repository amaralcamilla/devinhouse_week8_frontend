//6. Identifique as quantas e quais são as props do componente abaixo. Logo após, crie um componente Post passando todas as props identificadas.

//10 props: Avatar, nome, tempo da publicação, menu_post, parágrafo do post, foto do post, botão de like, botão comentários, botão de share, texto curtidas.
import React from 'react'
import PostHeader from './components/Post/PostHeader'
import PostContent from './components/Post/PostContent'
import Reactions from './components/Post/Reactions'

class Post extends React.Component {
    render() {
        return (
            <>
            <PostHeader />

            <PostContent />

            <Reactions />
            </>
        )
    }
}

export default Post;