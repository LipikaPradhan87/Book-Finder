function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={coverUrl} alt={book.title} className="w-full h-40 object-cover rounded" />
      <h3 className="font-semibold mt-2">{book.title}</h3>
      <p className="text-gray-600 text-sm">
        {book.author_name?.[0] || "Unknown Author"}
      </p>
      <p className="text-gray-500 text-xs">
        {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}

export default BookCard;
