import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const defaultOptions = {};
    if (product.options?.sizes?.length > 0) {
      defaultOptions.size = product.options.sizes[0];
    }
    if (product.options?.colors?.length > 0) {
      defaultOptions.color = product.options.colors[0];
    }
    if (product.options?.capacities?.length > 0) {
      defaultOptions.capacity = product.options.capacities[0];
    }

    addToCart(product, 1, defaultOptions);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 't-shirts':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22V16H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V16H2V14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M5,9V20H19V9A5,5 0 0,0 14,4H10A5,5 0 0,0 5,9Z" />
          </svg>
        );
      case 'accessories':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H9V3H15V9H21M7,10A2,2 0 0,0 5,12A2,2 0 0,0 7,14A2,2 0 0,0 9,12A2,2 0 0,0 7,10M17,10A2,2 0 0,0 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10M7,15C5.67,15 3,15.67 3,17V20H11V17C11,15.67 8.33,15 7,15M17,15C15.67,15 13,15.67 13,17V20H21V17C21,15.67 18.33,15 17,15Z" />
          </svg>
        );
      case 'cups':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
          </svg>
        );
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 't-shirts':
        return 'from-neon-blue to-neon-purple';
      case 'accessories':
        return 'from-neon-purple to-neon-pink';
      case 'cups':
        return 'from-neon-pink to-neon-cyan';
      default:
        return 'from-neon-blue to-neon-purple';
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-neutral-200 dark:border-neutral-800">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
          <img
            src={product.image || '/api/placeholder/300/300'}
            alt={product.name}
            className="w-4/5 h-4/5 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl">
            {getCategoryIcon(product.category)}
          </div>

          {/* Stock Badge */}
          {product.stock < 5 && (
            <div className="absolute top-6 right-6 bg-accent-coral text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse shadow-lg">
              Only {product.stock} left
            </div>
          )}

          {/* Quick Add Button */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={handleQuickAdd}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform"
              title="Quick Add to Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            {product.name}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col space-y-2">
              <span className="text-3xl font-bold">
                <span className="text-primary-500 dark:text-primary-400">$</span>
                <span className="text-neutral-900 dark:text-neutral-100">{product.price}</span>
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium">
                {product.category.replace('-', ' ')}
              </span>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-2 bg-accent-gold/10 dark:bg-accent-gold/20 px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                </svg>
                <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">4.8</span>
              </div>
              <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold">
                {product.stock} in stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
