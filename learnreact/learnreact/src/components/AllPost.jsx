import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

export default class AllPost extends Component {
  state = {
    posts: [],
  };

  getData = () => {
    axios
      .get('https://foodmenu-api.herokuapp.com/api/menu')
      .then((dataResult) => {
        this.setState({
          posts: dataResult.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.nama}
          body={post.harga}
          img={post.foto}
        />
      );
    });
  }
}
