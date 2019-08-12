import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../Contexts/CartContext'

const Navigation = props => {
	const cartData = useContext(CartContext);
	console.log('cartData', cartData)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
