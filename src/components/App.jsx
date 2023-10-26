// import Button from './Button/Button'
import { fetchPosts } from 'servis/API';
import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader'
// import Modal from './Modal/Modal'
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
// import axios from 'axios';

export class App extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
  };

  fethAllPost = async () => {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchPosts();
      console.log(posts);
      this.setState({ posts: posts.hits });
    } catch (error) {
      this.setState({ error: error.massage });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fethAllPosts();
  }

  render() {
    const showPosts =
      Array.isArray(this.state.posts) && this.state.images.length;
    return (
      <div>
        <div>
          <Searchbar />

          <ImageGallery images={this.state.posts} />
        </div>
      </div>
    );
  }
}
