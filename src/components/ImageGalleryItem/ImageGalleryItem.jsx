import { Component } from 'react';
import css from './ImageGallery.module.css';
import React from 'react';
import { fetchPosts } from 'components/servise/api';

export default class ImageGallery extends Component {
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.isLoading && (
          <div>
            <p>Loading...</p>
          </div>
        )}
        <ul className={css.gallery}>
          {this.state.posts &&
            this.state.posts.map(post => {
              return (
                <li key={post.id} className={css.galleryItem}>
                  <img src={post.webformatURL} alt={post.tags} />
                  <div>
                    {/* <span>id : {post.id}</span>
                    <span>webformatURL : {post.webformatURL}</span>
                    <span>largeImageURL : {post.largeImageURL}</span> */}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
