import { GlobalContext } from "./context";

export const SearchForm = () => {
  const { setSearchTerm } = GlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };

  return (
    <section>
      <h3 className="title">Unsplash Images</h3>
      <form className="unsplash-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="unsplash-form-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
