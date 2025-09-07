import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const CartPanel = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { isDarkMode } = useTheme();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] animate-fadeIn"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-war-dark shadow-2xl z-[70] animate-slideInRight transition-colors duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-war-blood/20">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-anime">
                <span className="text-peace dark:text-war">YOUR CART</span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-war-steel/30 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-peace-cloud dark:bg-war-steel/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-peace-sakura dark:text-war-blood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-peace-sakura to-peace-sky dark:from-war-blood dark:to-war-fire text-white rounded-xl hover:shadow-lg transition-all"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="bg-gray-50 dark:bg-war-steel/20 rounded-xl p-4 border border-gray-200 dark:border-war-blood/10 transition-all">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg bg-gray-200 dark:bg-war-ash flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image || '/api/placeholder/80/80'}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.name}</h3>
                      <p className="text-peace-sakura dark:text-war-blood text-sm mb-2">${item.price}</p>
                      {Object.keys(item.options).length > 0 && (
                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                          {Object.entries(item.options).map(([key, value]) => `${key}: ${value}`).join(', ')}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.options)}
                          className="w-6 h-6 rounded-full bg-peace-cloud dark:bg-war-steel/30 hover:bg-peace-sakura/20 dark:hover:bg-war-blood/20 flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-gray-900 dark:text-gray-100 px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.options)}
                          className="w-6 h-6 rounded-full bg-peace-cloud dark:bg-war-steel/30 hover:bg-peace-sakura/20 dark:hover:bg-war-blood/20 flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.options)}
                          className="ml-auto text-anime-red hover:text-red-600 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-200 dark:border-war-blood/20">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600 dark:text-gray-400">Total</span>
                <span className="text-2xl font-bold">
                  <span className="text-peace dark:text-war">${getCartTotal().toFixed(2)}</span>
                </span>
              </div>
              <div className="space-y-3">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 text-center border-2 border-peace-sakura dark:border-war-blood text-peace-sakura dark:text-war-blood rounded-xl hover:bg-peace-sakura/10 dark:hover:bg-war-blood/10 transition-all font-semibold"
                >
                  View Full Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 text-center bg-gradient-to-r from-peace-sakura to-peace-sky dark:from-war-blood dark:to-war-fire text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPanel;
