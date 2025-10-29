import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs);
    } catch (err) {
      setError("Failed to fetch books");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book Finder 📚</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        searchBooks={searchBooks}
      />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      {!loading && books.length === 0 && (
        <p className="text-center mt-6 text-gray-600">No books found 🥲</p>
      )}
    </div>
  );
}

export default Home;
