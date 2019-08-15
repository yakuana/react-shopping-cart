import React, { useContext } from 'react';

// Components
import Product from './Product';

// Context 
import { ProductContext } from '../contexts/ProductContext.js'

const Products = () => {

	// destructured object 
	const { products, addItem } = useContext(ProductContext);

	// console.log("products in Products.js ", products)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
