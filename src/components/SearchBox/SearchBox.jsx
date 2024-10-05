import css from './SearchBox.module.css';
const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
