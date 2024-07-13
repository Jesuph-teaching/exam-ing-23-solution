import { Link } from 'react-router-dom';
import CardBook from './CartCardBook';
import useCart from '../hook/useCart';

export default function Cart() {
	const { cart, clearCart } = useCart();

	return (
		<dialog id="cart_modal" className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
				</form>
				<h3 className="text-lg font-bold">Your cart</h3>
				<p className="py-4">You can see the items you have added to your cart here.</p>
				{cart.length === 0 ? (
					<p className="text-center">Your cart is empty.</p>
				) : (
					<>
						<div className="flex flex-col gap-4">
							{cart.map((book) => (
								<CardBook key={book.id} title={book.title} price={book.price} id={book.id} />
							))}
						</div>
						<div className="modal-action">
							<Link
								to="/checkout"
								className="btn btn-primary"
								onClick={() => document.getElementById('cart_modal').close()}
							>
								Checkout
							</Link>
							<button className="btn btn-secondary" onClick={clearCart}>
								Clear Cart
							</button>
						</div>
					</>
				)}
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	);
}
