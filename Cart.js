// pages/products.js
import React from 'react';
import Cart from '../components/Cart';

const products = [
  { id: 1,
    name: 'Product 1',
    price: 10.99,
    image:'images/product1.jpg'
  },
  { id: 2, name: 'Product 2', price: 15.99 , image: "images/product1.jpg"
},
  // Add more products
];

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <button onClick={() => Cart.addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
}

export default Products;
