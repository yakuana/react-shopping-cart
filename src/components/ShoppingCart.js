import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

// Context 
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {

	const { cart, removeItem } = useContext(CartContext);
	// console.log("cart", cart)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item 
				key={Date.now()} 
				{...item} 
				removeItem={removeItem}
				/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
