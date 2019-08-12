import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../Contexts/CartContext'

const Navigation = () => {
	const cartData = useContext(CartContext);
	console.log('cartData in navigation', cartData)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartData.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
