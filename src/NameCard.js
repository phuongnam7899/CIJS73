import {useState} from 'react'
const App = () => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
	return (
		<div>
			<ProductList products={products} cartItems={cartItems}/>
			<Cart cartItems={cartItems}/>
		</div>
	)
}

const ProductList = (props) => {
    const { products, cartItems } = props;
	return (...) // UI here
}

const Cart = () => {
    const { cartItems } = props;
	return (...) // UI here
}