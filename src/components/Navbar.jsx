import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - TiniShop */}
        <Link to="/" className="font-bold text-2xl flex items-center">
          🛍️ TiniShop
        </Link>
        
        {/* Search Bar - di Tengah */}
        <div className="flex-1 max-w-2xl mx-8">
          <input
            type="text"
            placeholder="Cari produk... (contoh: iPhone, Sepatu, Dress)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 text-gray-900 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>
        
        {/* Menu Navigasi - di Kanan */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-200 font-medium">
            Beranda
          </Link>
          
          <Link to="/cart" className="relative hover:text-gray-200 font-medium flex items-center">
            🛒 Keranjang
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getCartItemsCount()}
              </span>
            )}
          </Link>
          
          <Link to="/checkout" className="hover:text-gray-200 font-medium">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}