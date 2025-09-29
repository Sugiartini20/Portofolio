import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/frontpages/Dashboard';
import Cart from './pages/frontpages/Cart';
import Checkout from './pages/frontpages/Checkout';
import ProductDetail from './pages/frontpages/ProductDetail';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Routes Customer - PAKAI NAVBAR */}
        <Route path="/" element={
          <>
            <Navbar />
            <Dashboard />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
          </>
        } />
        <Route path="/checkout" element={
          <>
            <Navbar />
            <Checkout />
          </>
        } />
        <Route path="/product/:id" element={
          <>
            <Navbar />
            <ProductDetail />
          </>
        } />
        
        {/* Routes Admin - TANPA NAVBAR, PAKAI ADMIN LAYOUT */}
        <Route path="/admin" element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        } />
        <Route path="/admin/about" element={
          <AdminLayout>
            <AboutPage />
          </AdminLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;