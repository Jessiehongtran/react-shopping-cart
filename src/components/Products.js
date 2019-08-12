import React, {useContext} from 'react';

// Components
import Product from './Product';
import ProductContext from '../Contexts/ProductContext'


const Products = () => {
	const productData = useContext(ProductContext)
	console.log('productData', productData)

	return (
		<div className="products-container">
			{productData.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={productData.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
