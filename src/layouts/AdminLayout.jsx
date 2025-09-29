import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Admin */}
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
                className="flex items-center space-x-3 p-3 bg-blue-900 rounded-lg text-white font-medium"
              >
                <span></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/about" 
                className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg text-blue-100 transition-colors"
              >
                <span></span>
                <span>About</span>
              </Link>
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
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}