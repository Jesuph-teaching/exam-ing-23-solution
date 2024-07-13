import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Books from './Pages/Books';
import Checkout from './Pages/Checkout';

export default function Routes() {
	return useRoutes([
		{
			index: true,
			element: <Home />,
		},
		{
			path: '/books',
			element: <Books />,
		},
		{
			path: 'checkout',
			element: <Checkout />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
	]);
}
