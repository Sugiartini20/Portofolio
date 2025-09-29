import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        showNotificationMessage(`✅ ${quantity} ${product.name} ditambahkan ke keranjang!`);
        return updatedItems;
      } else {
        // Add new item to cart
        showNotificationMessage(`✅ ${product.name} ditambahkan ke keranjang!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      showNotificationMessage('🗑️ Produk dihapus dari keranjang');
      return updatedItems;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    showNotificationMessage('🧹 Keranjang dikosongkan');
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    showNotification,
    notificationMessage
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-right">
          {notificationMessage}
        </div>
      )}
    </CartContext.Provider>
  );
};