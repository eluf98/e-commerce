import { ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full">
      {/* Üst Bilgi Barı */}
      <div className="bg-gray-900 text-white text-xs px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-1 md:mb-0">
          <span className="mr-2">📞 (225) 555-0118</span>
          <span>✉️ michelle.rivera@example.com</span>
        </div>
        <div className="text-center">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="flex space-x-2 mt-1 md:mt-0">
          <a href="#" className="hover:text-gray-400">Fb</a>
          <a href="#" className="hover:text-gray-400">Ig</a>
          <a href="#" className="hover:text-gray-400">Tw</a>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="flex items-center justify-between px-4 py-3 shadow-md">
        <div className="text-xl font-bold">Bandage</div>

        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <div className="relative group">
            <button className="hover:text-blue-600">Shop</button>
            <div className="absolute left-0 top-full bg-white shadow-md p-4 hidden group-hover:block z-10">
              <div className="flex space-x-10 text-sm">
                <div>
                  <p className="font-bold mb-2">Kadin</p>
                  <ul className="space-y-1">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Belts</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Hats</a></li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Erkek</p>
                  <ul className="space-y-1">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Belts</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Hats</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm hover:underline">Login / Register</Link>
          <User className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;