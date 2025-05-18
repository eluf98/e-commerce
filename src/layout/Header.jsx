import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">E-commerce UI</h1>
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="text-sm hover:text-blue-500">Home</Link>
          <Link to="/shop" className="text-sm hover:text-blue-500">Shop</Link>
          <Link to="/contact" className="text-sm hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;