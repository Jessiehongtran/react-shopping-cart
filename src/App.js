import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './Contexts/ProductContext'
import CartContext from './Contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		
	<ProductContext.Provider value={{products, addItem}}>
			<div className="App">
				<CartContext.Prodiver value={cart}>
					<Navigation cart={cart} />
				</CartContext.Prodiver>

				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>

				<CartContext.Prodiver value={cart}>
					<Route
						path="/cart"
						component={ShoppingCart} />}
					/>
				</CartContext.Prodiver>
			</div>
	</ProductContext.Provider>
	);
}

export default App;
