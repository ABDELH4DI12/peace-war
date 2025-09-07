import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('animeStoreCart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(Array.isArray(parsedCart) ? parsedCart : []);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      setCart([]);
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('animeStoreCart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, options = {}) => {
    console.log('addToCart called with:', { product, quantity, options });
    
    if (!product || !product.id) {
      console.error('Invalid product provided to addToCart');
      return;
    }

    setCart(prevCart => {
      console.log('Previous cart:', prevCart);
      const optionsKey = JSON.stringify(options);
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && JSON.stringify(item.options || {}) === optionsKey
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        console.log('Updated existing item, new cart:', updatedCart);
        return updatedCart;
      }

      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
        quantity,
        options: options || {}
      };

      const newCart = [...prevCart, newItem];
      console.log('Added new item, new cart:', newCart);
      return newCart;
    });
  };

  const removeFromCart = (productId, options = {}) => {
    setCart(prevCart => {
      const optionsKey = JSON.stringify(options);
      return prevCart.filter(item => 
        !(item.id === productId && JSON.stringify(item.options || {}) === optionsKey)
      );
    });
  };

  const updateQuantity = (productId, quantity, options = {}) => {
    if (quantity <= 0) {
      removeFromCart(productId, options);
      return;
    }

    setCart(prevCart => {
      const optionsKey = JSON.stringify(options);
      return prevCart.map(item => {
        if (item.id === productId && JSON.stringify(item.options || {}) === optionsKey) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return total + (price * quantity);
    }, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => {
      const quantity = parseInt(item.quantity) || 0;
      return total + quantity;
    }, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  };
};
