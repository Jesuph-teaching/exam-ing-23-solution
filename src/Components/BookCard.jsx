import PropTypes from 'prop-types';
import useCart from '../hook/useCart';
function BookCard({ title, price, image, id }) {
	const { addToCart } = useCart();

	return (
		<div className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
			<img src={`/books/${image}`} alt="Book" className="aspect-[9/16] w-full rounded-md object-cover" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">{title}</h2>
				<p>Price: ${price}</p>
				<button
					className="btn btn-primary"
					onClick={() => {
						addToCart({
							id,
							title,
							price,
							image,
						});
					}}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
BookCard.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default BookCard;
