import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
	console.log('props in item', props)
	return (
		<div className="shopping-cart_item">
			
			<img src={props.item.image} alt={`${props.item.title} book`} />

			<div>
				<h1>{props.item.title}</h1>
				<p>$ {props.item.price}</p>
				<button onClick={()=> props.removeItem(props.item)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
