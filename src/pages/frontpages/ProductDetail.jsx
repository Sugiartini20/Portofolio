import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id));
    setSelectedProduct(product);

    if (product) {
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!selectedProduct) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-2xl font-bold text-red-600 mb-4">Produk tidak ditemukan</h1>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    if (selectedProduct.stock === 0) {
      alert("❌ Maaf, stok produk ini habis");
      return;
    }

    if (quantity > selectedProduct.stock) {
      alert(`❌ Maaf, stok hanya tersedia ${selectedProduct.stock} item`);
      return;
    }

    addToCart(selectedProduct, quantity);
  };

  const handleBuyNow = () => {
    if (selectedProduct.stock === 0) {
      alert("❌ Maaf, stok produk ini habis");
      return;
    }

    if (quantity > selectedProduct.stock) {
      alert(`❌ Maaf, stok hanya tersedia ${selectedProduct.stock} item`);
      return;
    }

    addToCart(selectedProduct, quantity);
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600">🏠 Beranda</Link>
        <span className="mx-2">/</span>
        <span className="capitalize">{selectedProduct.category.replace('-', ' ')}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{selectedProduct.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Gambar Produk */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          {/* Product Badges */}
          <div className="flex flex-wrap gap-2">
            {selectedProduct.stock > 10 && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                ✅ Stok Tersedia
              </span>
            )}
            {selectedProduct.stock > 0 && selectedProduct.stock <= 10 && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                ⚠️ Stok Terbatas
              </span>
            )}
            {selectedProduct.stock === 0 && (
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                ❌ Stok Habis
              </span>
            )}
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              ⭐ {selectedProduct.rating} Rating
            </span>
          </div>
        </div>

        {/* Info Produk */}
        <div className="space-y-6">
          <div>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full capitalize mb-3 inline-block">
              {selectedProduct.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl font-bold mb-3">{selectedProduct.name}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="ml-1 font-semibold">{selectedProduct.rating}</span>
                <span className="text-gray-600 ml-1">({selectedProduct.reviews} ulasan)</span>
              </div>
            </div>

            <p className="text-4xl font-bold text-green-600 mb-4">
              {formatPrice(selectedProduct.price)}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">📋 Deskripsi Produk</h3>
            <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
          </div>

         {/* Fitur Produk - Generate dari deskripsi */}
<div className="bg-gray-50 p-4 rounded-lg">
  <h3 className="text-lg font-semibold mb-3">✨ Keunggulan Produk</h3>
  <ul className="grid grid-cols-1 gap-2">
    <li className="flex items-center">
      <span className="text-green-500 mr-3 text-lg">✓</span>
      <span className="text-gray-700">Kualitas Terjamin</span>
    </li>
    <li className="flex items-center">
      <span className="text-green-500 mr-3 text-lg">✓</span>
      <span className="text-gray-700">Garansi Resmi</span>
    </li>
    <li className="flex items-center">
      <span className="text-green-500 mr-3 text-lg">✓</span>
      <span className="text-gray-700">Pengiriman Cepat</span>
    </li>
    <li className="flex items-center">
      <span className="text-green-500 mr-3 text-lg">✓</span>
      <span className="text-gray-700">Bisa COD</span>
    </li>
  </ul>
</div>

          {/* Quantity & Action Buttons */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">Jumlah Pembelian:</span>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-12 text-center text-xl font-bold border border-gray-300 py-2 rounded">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= selectedProduct.stock}
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-600">
                Stok tersedia: <strong>{selectedProduct.stock}</strong>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleAddToCart}
                disabled={selectedProduct.stock === 0}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  selectedProduct.stock > 0
                    ? "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {selectedProduct.stock > 0 ? "🛒 Tambah ke Keranjang" : "😔 Stok Habis"}
              </button>
              
              <button 
                onClick={handleBuyNow}
                disabled={selectedProduct.stock === 0}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  selectedProduct.stock > 0
                    ? "bg-green-600 text-white hover:bg-green-700 transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {selectedProduct.stock > 0 ? "⚡ Beli Sekarang" : "Stok Habis"}
              </button>
            </div>

            <div className="flex space-x-4 pt-4">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                ← Kembali ke Beranda
              </Link>
              <Link to="/cart" className="text-blue-600 hover:text-blue-800 font-medium">
                Lihat Keranjang →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">🔥 Produk Serupa Lainnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-green-600 font-bold">{formatPrice(product.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}