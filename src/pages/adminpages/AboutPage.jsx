import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-blue-800 text-white shadow-lg">
        <div className="p-6 border-b border-blue-700">
          <h1 className="text-2xl font-bold">My Admin</h1>
          <p className="text-blue-200 text-sm mt-1">DatabaseId</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin" 
                className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg text-blue-100 transition-colors"
              >
                <span></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/about" 
                className="flex items-center space-x-3 p-3 bg-blue-900 rounded-lg text-white font-medium"
              >
                <span></span>
                <span>About</span>
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg text-blue-100 transition-colors">
                <span></span>
                <span></span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg text-blue-100 transition-colors">
                <span></span>
                <span></span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-700">
          <p className="text-center text-blue-200 text-sm">
            © 2025 My Admin App — v3.0.0
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">About</h1>
            <p className="text-gray-600 mb-8">Tentang Aplikasi My Admin</p>

            <div className="space-y-8">
              {/* Profil Aplikasi */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4"> Profil </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                   Sistem admin untuk kelola pesanan dan produk toko online secara real-time.
                  </p>
                </div>
              </div>

              {/* Developer */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4"> Developer</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Nama:</span>
                      <span className="text-gray-600">Tini Team</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Email:</span>
                      <span className="text-gray-600">kadeksugiartini19@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Telp/WA:</span>
                      <span className="text-gray-600">082342796629</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Versi Aplikasi */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4"> Versi Aplikasi</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Versi 1.0.0 (Beta)</p>
                      <p className="text-gray-600 text-sm mt-1">Initial release dengan fitur dasar</p>
                    </div>
                    <div className="text-3xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Dashboard */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                to="/admin" 
                className=""
              >
                <span></span>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}