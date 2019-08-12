import React, {useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import CartContext from '../Contexts/CartContext'

const ShoppingCart = props => {
	const cartData = useContext(CartContext);
	console.log('cartData', cartData)
	
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{props.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
