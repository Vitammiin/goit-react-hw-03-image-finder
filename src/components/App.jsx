import React, { Component } from 'react';
import { fetchPosts } from 'servise/api';
import Searchbar from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    posts: [],
    isLoading: false,
    error: null,
  };

  fethAllPosts = async () => {
    try {
      const posts = await fetchPosts();
      console.log(posts);
      this.setState({ posts: [] });
    } catch (error) {}
  };

  componentDidMount() {
    this.fethAllPosts();
  }

  render() {
    return (
      <div>
        <div>
          <Searchbar />
        </div>
        <div>
          <ul>
            {this.state.posts.map(post => {
              return (
                <li key={post.id}>
                  <img src={post.webformatURL} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
