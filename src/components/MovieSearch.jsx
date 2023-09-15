import "./movieSearch.css";
export default function MovieSearch({ handleFilter }) {
  return (
    <>
      <form
        action=""
        className="search-bar"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search">
          <h2>Search for your movie</h2>
        </label>
        <input
          type="search"
          name="search"
          required
          placeholder="what are you looking for..."
          onChange={(e) => handleFilter(e.target.value.trim())}
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}
