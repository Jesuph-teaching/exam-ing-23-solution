import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import CartButton from './Components/CartButton';
import Cart from './Components/Cart';
import CartProvider from './Providers/CartProvider';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Routes />
				<CartButton />
				<Cart />
				<Toaster />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
