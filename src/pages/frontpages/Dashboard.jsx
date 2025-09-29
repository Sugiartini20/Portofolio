import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { products, categories } from "../../data/products";
import { useSearch } from "../../context/SearchContext";

export default function Dashboard() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { searchTerm } = useSearch();

  useEffect(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, sortBy]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Kategori Produk */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Kategori Produk</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Filter dan Info */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="name">Urutkan: Nama</option>
            <option value="price-low">Harga: Terendah</option>
            <option value="price-high">Harga: Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
          </select>
          
          <p className="text-gray-600 text-sm">
            Menampilkan {filteredProducts.length} produk
            {selectedCategory !== "all" && ` dalam ${categories.find(c => c.id === selectedCategory)?.name}`}
            {searchTerm && ` untuk "${searchTerm}"`}
          </p>
        </div>
      </div>

      {/* Grid Produk */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😔</div>
          <h3 className="text-xl font-semibold mb-2">Produk tidak ditemukan</h3>
          <p className="text-gray-600 mb-4">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Tampilkan Semua Produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.stock < 10 && product.stock > 0 && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    Stok Terbatas
                  </span>
                )}
                {product.stock === 0 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Stok Habis
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded capitalize">
                    {product.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-yellow-400">⭐</span>
                    {product.rating} ({product.reviews})
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-green-600 font-bold text-lg">{formatPrice(product.price)}</span>
                  <span className="text-sm text-gray-500">Stok: {product.stock}</span>
                </div>
                
                <Link
                  to={`/product/${product.id}`}
                  className={`w-full text-center py-2 rounded-lg font-medium transition-colors ${
                    product.stock > 0
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.stock > 0 ? "Lihat Detail" : "Stok Habis"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}