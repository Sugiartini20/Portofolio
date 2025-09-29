import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={`${sidebarOpen ? "block" : "hidden"} md:block w-64 bg-white shadow-md fixed md:relative h-full z-30`}>
      <div className="p-4 font-bold text-xl border-b">My Admin</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link 
          to="/admin/dashboard" 
          className="hover:bg-gray-200 p-2 rounded transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          📊 Dashboard
        </Link>
        <Link 
          to="/admin/about" 
          className="hover:bg-gray-200 p-2 rounded transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          ℹ️ About
        </Link>
        <Link 
          to="/" 
          className="hover:bg-gray-200 p-2 rounded transition-colors mt-4"
          onClick={() => setSidebarOpen(false)}
        >
          ← Kembali ke Toko
        </Link>
      </nav>
    </div>
  );
}