import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Product 1", price: "$30", image: "/assets/react.svg" },
  { id: 2, name: "Product 2", price: "$50", image: "/assets/react.svg" },
  // ...
];

const HomePage = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">E-commerce UI</h2>
      <p className="text-center text-gray-600 mb-6">Production-ready Ecommerce UI kit.</p>


      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;