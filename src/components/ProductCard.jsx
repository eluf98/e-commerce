const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-blue-600 font-bold">{product.price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;