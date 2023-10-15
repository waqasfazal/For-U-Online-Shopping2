import products from '../data/products.json';

function HomePage() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
