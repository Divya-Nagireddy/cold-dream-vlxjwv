export default function ProductList({ data, loading }) {
  return (
    <main>
      {loading && <p>Loading...</p>}
      {!loading && data?.products && (
        <div className="ProductList">
          {data?.products.map((product) => (
            <a
              className="ProductList__item"
              key={product.id}
              href={`https://ulta.com/${product.id}`}
              onClick={() => onClick(product)}
            >
              <img className="img" src={product.image} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
