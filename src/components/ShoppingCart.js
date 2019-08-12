import React, {useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import CartContext from '../Contexts/CartContext'

const ShoppingCart = props => {
	const cartData = useContext(CartContext);
	console.log('cartData in Shoppingcart', cartData)

	const getCartTotal = () => {
		return cartData.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cartData.cart.map(item => (
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
