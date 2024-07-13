import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="container flex h-full flex-wrap items-center justify-between gap-4 p-4">
			<div className="flex flex-col gap-4 p-4">
				<h1 className="max-w-[12ch] text-7xl font-bold">Welcome to our bookstore</h1>
				<p>Find your next favorite book here and enjoy reading!</p>
				<Link to="/books" className="btn btn-primary mr-auto">
					Get Started
				</Link>
			</div>
			<div className="w-full xl:w-2/5">
				<img src="/books.jpg" alt="Book" className="h-full w-full object-cover" />
			</div>
		</div>
	);
}
