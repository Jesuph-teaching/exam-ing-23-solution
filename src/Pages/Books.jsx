import BookCard from '../Components/BookCard';
import books from '../Data/books';

export default function Books() {
	return (
		<div className="container flex h-auto flex-col justify-start gap-4 p-4">
			<h1 className="text-6xl font-bold">Books</h1>
			<p>Pick a book from our collection and add it to your cart.</p>
			<div className="grid grow grid-cols-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{books.map((book) => (
					<BookCard key={book.id} id={book.id} title={book.title} price={book.price} image={book.image} />
				))}
			</div>
		</div>
	);
}
