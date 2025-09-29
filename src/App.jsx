import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/frontpages/Dashboard';
import Cart from './pages/frontpages/Cart';
import Checkout from './pages/frontpages/Checkout';
import ProductDetail from './pages/frontpages/ProductDetail';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';
import AdminLayout from './layouts/AdminLayout';
import ECommerce from './pages/frontpages/ECommerce';
import Home from './pages/frontpages/Home'; // IMPORT BARU

function App() {
  return (
    <div className="App">
      <Routes>
        {/* ROUTE HOME YANG BARU - TAMPILAN PORTFOLIO */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />

        {/* Routes E-Commerce Products - PAKAI NAVBAR */}
        <Route path="/products" element={
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
        
        {/* Route Halaman E-Commerce Project */}
        <Route path="/ecommerce" element={
          <>
            <Navbar />
            <ECommerce />
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