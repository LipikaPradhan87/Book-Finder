function SearchBar({ query, setQuery, searchBooks }) {
  return (
    <div className="flex justify-center gap-2">
      <input
        className="border border-gray-400 p-3 rounded-lg w-1/2"
        type="text"
        value={query}
        placeholder="Search book by title..."
        onChange={(e) => setQuery(e.target.value)}/>
      <button
        onClick={searchBooks}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
