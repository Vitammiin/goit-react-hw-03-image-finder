// import Button from './Button/Button'
import { fetchPosts } from 'servis/API';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader'
// import Modal from './Modal/Modal'
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import axios from 'axios';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  fethAllPosts = async () => {
    try {
      const images = await fetchPosts();
      this.setState({ images: images });
      console.log(images);
    } catch (error) {}
  };

  componentDidMount() {
    this.fethAllPosts();
  }

  render() {
    const showPosts =
      Array.isArray(this.state.images) && this.state.images.length;
    return (
      <div>
        <div>
          <Searchbar />
        </div>
      </div>
    );
  }
}
