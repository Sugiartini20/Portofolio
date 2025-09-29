export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to My Admin </h1>
          <p className="text-gray-600">
            Guardian menu of sidebar untuk mengelola Dashboard, Pesanan, Produk, dan lainnya.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Vari 1:00 – 2025
          </div>
        </div>

        {/* Dashboard akan berisi pesanan jika sudah ada data pesanannya */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="text-6xl mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dashboard Pesanan</h3>
          <p className="text-gray-600">Akan menampilkan data pesanan ketika ada order dari customer.</p>
        </div>
      </div>
    </div>
  );
}