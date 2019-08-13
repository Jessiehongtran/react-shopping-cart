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

	const removeItem = item => {
		// console.log('item in removeItem', item)
		const filteredCart = cart.filter(cartItem => cartItem.id !== item.id)
		setCart(filteredCart)
	}

	return (
		
	<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={{cart, removeItem}}>
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
					component={ShoppingCart} 
				/>
			</div>
		</CartContext.Provider>
	</ProductContext.Provider>
	);
}

export default App;

