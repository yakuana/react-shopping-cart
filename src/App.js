import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	// console.log("products in App.js", products)
	
	const [cart, setCart] = useState([]);
	// console.log("cart in App.js", cart, "setCart in App.js", setCart)

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = itemId => {
		// console.log("itemId", itemId); 

		// console.log("cart", cart)

		const newCart = cart.filter(movie => movie.id != itemId);

		setCart(newCart)
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, setCart, removeItem }}>
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
