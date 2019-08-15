import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context 
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {

	const [products] = useState(data);
	// console.log("products in App.js", products)
	
	// if there is a cart key in local storage, get it. otherwise, set cart to be an empty array 
	const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

	// adds an item to an the cart [] using spread and the item {}
	const addItem = item => {
		setCart([...cart, item]);
	};

	// creates a new array without the items with the same id as itemId (removes all duplicates)
	const removeItem = itemId => {
		
		// console.log("itemId", itemId); 

		const newCart = cart.filter(item => item.id !== itemId);
		// console.log("cart after filter", cart)

		setCart(newCart)
	}

	// updates local storage when cart is changed 
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

	
	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, setCart, removeItem }}>
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
