import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    listaPost : [
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'henrique',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'bob',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    }
   ]
 };

  render() {
    const listaDePosts = this.state.listaPost.map(post => {
      return (
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
        />
      )
    })
  }
}

export default App;
