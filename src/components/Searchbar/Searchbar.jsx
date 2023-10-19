import css from '../styles.module.css';

const Searchbar = () => {
  return (
    <div>
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.ButtonLabel}>
            <span className={css.Button}>Search</span>
          </button>

          <input
            className={css.Input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
export default Searchbar;
