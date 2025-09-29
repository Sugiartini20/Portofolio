import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    getCartTotal 
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const shippingCost = 15000;
  const totalCost = getCartTotal() + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold mb-4">Keranjang Belanja Kosong</h1>
        <p className="text-gray-600 mb-6">Silakan tambahkan produk ke keranjang belanja Anda</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Keranjang Belanja</h1>
        <button 
          onClick={clearCart}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          🗑️ Kosongkan Keranjang
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daftar Produk */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded"
              />
              
              <div className="flex-1">
                <Link 
                  to={`/product/${item.id}`}
                  className="font-semibold text-lg hover:text-blue-600"
                >
                  {item.name}
                </Link>
                <p className="text-green-600 font-bold">{formatPrice(item.price)}</p>
                <p className="text-sm text-gray-600">Stok: {item.stock}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={item.quantity >= item.stock}
                  className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                >
                  +
                </button>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-lg">{formatPrice(item.price * item.quantity)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-sm mt-1"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ringkasan Belanja */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
          <h3 className="text-xl font-bold mb-4">📊 Ringkasan Belanja</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
              <span className="font-semibold">{formatPrice(getCartTotal())}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Ongkos Kirim:</span>
              <span className="font-semibold">{formatPrice(shippingCost)}</span>
            </div>
            
            <hr />
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-green-600">{formatPrice(totalCost)}</span>
            </div>
          </div>

          <Link 
            to="/checkout" 
            className="w-full bg-green-600 text-white py-3 rounded-lg text-center block hover:bg-green-700 font-semibold text-lg mb-3"
          >
            🚀 Lanjut ke Checkout
          </Link>
          
          <Link 
            to="/" 
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg text-center block hover:bg-gray-300 font-medium"
          >
            ← Lanjutkan Belanja
          </Link>
        </div>
      </div>
    </div>
  );
}