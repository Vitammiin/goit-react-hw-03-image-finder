import { Component } from 'react';
import css from './Searchbar.module.css';
import React from 'react';

export default class Searchbar extends Component {
  state = {
    searchPost: null,
  };

  SearchbarClick = event => {
    event.preventDefault();
    const searchPost = event.currentTarget.elements.query.value;
    console.log(searchPost);
  };

  render() {
    return (
      <div>
        <header className={css.Searchbar}>
          <form onSubmit={this.SearchbarClick} className={css.SearchForm}>
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}>Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
            />
          </form>
        </header>
      </div>
    );
  }
}
