import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function MainLayout() {
  const { getCartItemsCount } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <Navbar />
      
      {/* Cart Items Count Badge */}
      {getCartItemsCount() > 0 && (
        <div className="fixed top-20 right-4 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold z-40">
          {getCartItemsCount()}
        </div>
      )}

      {/* Search & Filter */}
      <header className="bg-white p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Cari produk... (contoh: iPhone, Sepatu, Dress)"
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Semua Kategori</option>
            <option>Elektronik</option>
            <option>Fashion Pria</option>
            <option>Fashion Wanita</option>
            <option>Elektronik Rumah</option>
            <option>Olahraga</option>
            <option>Kecantikan</option>
          </select>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6">
        <p>© 2025 MyShop E-Commerce | Version 2.0</p>
        <p className="text-gray-400 text-sm mt-2">Toko online terpercaya dengan berbagai produk berkualitas</p>
      </footer>
    </div>
  );
}