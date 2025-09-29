import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    kota: "",
    kodePos: "",
    metodePembayaran: "transfer"
  });

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate random order number
    const newOrderNumber = "ORD" + Date.now();
    setOrderNumber(newOrderNumber);
    
    // Simulasi proses checkout
    setOrderSuccess(true);
    
    // Clear cart setelah order success
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 5000);
  };

  const shippingCost = 15000;
  const totalCost = getCartTotal() + shippingCost;

  if (cartItems.length === 0 && !orderSuccess) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold mb-4">Keranjang Belanja Kosong</h1>
        <p className="text-gray-600 mb-6">Silakan tambahkan produk terlebih dahulu</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg mb-6">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-2">Pesanan Berhasil!</h2>
          <p className="text-lg mb-2">Terima kasih telah berbelanja di MyShop</p>
          <p className="mb-4">Nomor Pesanan: <strong>{orderNumber}</strong></p>
          <p>Pesanan Anda sedang diproses dan akan dikirim segera.</p>
          <p className="mt-4 text-sm">Anda akan diarahkan ke halaman utama dalam 5 detik...</p>
        </div>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Data Pengiriman */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">📦 Data Pengiriman</h3>
          
          <div>
            <label className="block text-sm font-medium mb-2">Nama Lengkap *</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telepon *</label>
              <input
                type="tel"
                name="telepon"
                value={formData.telepon}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Alamat Lengkap *</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Jl. Contoh No. 123, RT/RW ..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Kota *</label>
              <input
                type="text"
                name="kota"
                value={formData.kota}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Kode Pos *</label>
              <input
                type="text"
                name="kodePos"
                value={formData.kodePos}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Ringkasan & Metode Pembayaran */}
        <div className="space-y-6">
          {/* Ringkasan Pesanan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">📊 Ringkasan Pesanan</h3>
            <div className="space-y-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.quantity} x {formatPrice(item.price)}</p>
                  </div>
                  <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              
              <hr />
              
              <div className="flex justify-between">
                <span>Subtotal:</span>
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
          </div>

          {/* Metode Pembayaran */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">💳 Metode Pembayaran</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="metodePembayaran"
                  value="transfer"
                  checked={formData.metodePembayaran === "transfer"}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <div>
                  <span className="font-medium">Transfer Bank</span>
                  <p className="text-sm text-gray-600">BCA, BNI, Mandiri, BRI</p>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="metodePembayaran"
                  value="cod"
                  checked={formData.metodePembayaran === "cod"}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <div>
                  <span className="font-medium">Cash on Delivery (COD)</span>
                  <p className="text-sm text-gray-600">Bayar ketika barang diterima</p>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="metodePembayaran"
                  value="ewallet"
                  checked={formData.metodePembayaran === "ewallet"}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <div>
                  <span className="font-medium">E-Wallet</span>
                  <p className="text-sm text-gray-600">Gopay, OVO, Dana, ShopeePay</p>
                </div>
              </label>
            </div>
          </div>

          {/* Tombol Aksi */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            ✅ Konfirmasi Pesanan
          </button>

          <Link 
            to="/cart" 
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg text-center block hover:bg-gray-300 font-medium"
          >
            ← Kembali ke Keranjang
          </Link>
        </div>
      </form>
    </div>
  );
}