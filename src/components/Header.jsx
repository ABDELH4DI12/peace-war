import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const location = useLocation();
  const { getCartItemCount, setIsCartOpen } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = getCartItemCount();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl sm:rounded-2xl opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"></div>
              <div className="relative flex items-center justify-center h-full">
                <span className="text-white font-anime text-lg sm:text-xl lg:text-2xl">P&W</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-anime tracking-wider">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">PEACE & WAR</span>
              </h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-japanese mt-1 hidden lg:block">アニメストア</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link 
              to="/" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive('/products') 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              Products
            </Link>
          </nav>

          {/* Actions - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle - Smaller on mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            {/* Cart Button - Responsive */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative px-3 sm:px-5 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl font-semibold flex items-center space-x-1 sm:space-x-2 lg:space-x-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg shadow-secondary-500/25"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="font-medium text-sm sm:text-base">Cart</span>
              {cartItemCount > 0 && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-accent-coral text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center animate-pulse shadow-lg">
                  {cartItemCount}
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Improved */}
        <nav className="lg:hidden mt-4 sm:mt-6">
          <div className="flex justify-center space-x-3 sm:space-x-4 max-w-sm mx-auto">
            <Link 
              to="/" 
              className={`flex-1 text-center px-4 sm:px-5 py-2.5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`flex-1 text-center px-4 sm:px-5 py-2.5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                isActive('/products') 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              Products
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
