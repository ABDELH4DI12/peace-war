import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find(p => p.id === id);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-12 rounded-3xl text-center max-w-md mx-auto">
          <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link to="/products" className="neon-button text-white px-6 py-3 rounded-xl font-medium">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionType]: value
    }));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions);
    // Show success message (you could add a toast notification here)
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const isOutOfStock = product.stock === 0;
  
  // Get images array, fallback to single image if images array doesn't exist
  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/10 to-secondary-50/10 dark:from-neutral-950 dark:via-primary-950/10 dark:to-secondary-950/10 py-6">
      <div className="container mx-auto px-6 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link to="/products" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Products</Link>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-primary-600 dark:text-primary-400 font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image with Zoom */}
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-lg shadow-primary-500/5 dark:shadow-primary-500/3 border border-neutral-200/50 dark:border-neutral-800/50">
                <div 
                  className="aspect-square bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 dark:from-primary-950/10 dark:via-neutral-900 dark:to-secondary-950/10 rounded-lg flex items-center justify-center relative overflow-hidden cursor-zoom-in transition-all duration-300"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                  onClick={handleImageClick}
                >
                  <img
                    src={productImages[selectedImageIndex]}
                    alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                    className={`w-4/5 h-4/5 object-cover rounded-lg transition-all duration-300 mx-auto ${
                      isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'
                    }`}
                    style={
                      isZoomed
                        ? {
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          }
                        : {}
                    }
                  />
                  
                  {/* Zoom Indicator */}
                  {!isZoomed && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <span>Zoom</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Image Thumbnails */}
            {productImages.length > 1 && (
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-neutral-100 to-neutral-200/50 dark:from-neutral-800 dark:to-neutral-700/50 rounded-full border border-neutral-300/50 dark:border-neutral-600/50">
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium text-xs">Gallery</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="flex space-x-3 overflow-x-auto pb-2 max-w-sm">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                          selectedImageIndex === index
                            ? 'ring-2 ring-primary-500 shadow-md shadow-primary-500/20 scale-105'
                            : 'hover:ring-2 hover:ring-primary-300 dark:hover:ring-primary-600 hover:scale-105'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        
                        {/* Active Indicator */}
                        {selectedImageIndex === index && (
                          <div className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full border border-white shadow-sm"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Image Counter */}
                <div className="text-center">
                  <span className="inline-flex items-center px-2 py-1 bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium border border-primary-200 dark:border-primary-800">
                    {selectedImageIndex + 1} of {productImages.length}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Header */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full border border-primary-200 dark:border-primary-800">
                  <span className="text-primary-600 dark:text-primary-400 font-medium text-xs uppercase tracking-wide">{product.category.replace('-', ' ')}</span>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-neutral-900 via-primary-600 to-neutral-900 dark:from-neutral-100 dark:via-primary-400 dark:to-neutral-100 bg-clip-text text-transparent leading-tight">
                    {product.name}
                  </span>
                </h1>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Free shipping on orders over $50
                  </div>
                </div>
                
                <div className={`px-4 py-2 rounded-xl font-semibold text-sm border ${
                  product.stock > 10 
                    ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' 
                    : product.stock > 0 
                    ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
                    : 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                }`}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-10 group-hover:opacity-15 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200/50 dark:border-neutral-800/50 shadow-md shadow-neutral-500/5">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Product Details</h3>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-5">
              {/* Sizes */}
              {product.options?.sizes && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Size</h3>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.options.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => handleOptionChange('size', size)}
                        className={`relative px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                          selectedOptions.size === size
                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md shadow-primary-500/20 scale-105'
                            : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105'
                        }`}
                      >
                        {size}
                        {selectedOptions.size === size && (
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-secondary-500 rounded-full border border-white"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.options?.colors && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-secondary-500 to-accent-coral rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Color</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.options.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => handleOptionChange('color', color)}
                        className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                          selectedOptions.color === color
                            ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-md shadow-secondary-500/20 scale-105'
                            : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-secondary-300 dark:hover:border-secondary-600 hover:scale-105'
                        }`}
                      >
                        {color}
                        {selectedOptions.color === color && (
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent-coral rounded-full border border-white"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Phone Compatibility */}
              {product.options?.compatibility && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-accent-coral to-accent-mint rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Phone Model</h3>
                  </div>
                  <select
                    value={selectedOptions.model || ''}
                    onChange={(e) => handleOptionChange('model', e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 font-medium focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="">Select your phone model</option>
                    {product.options.compatibility.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-coral rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4zM6 6v12h12V6H6zm3-2V2h6v2H9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Quantity</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-bold text-lg"
                  >
                    −
                  </button>
                  <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/30 dark:to-secondary-950/30 border border-primary-200 dark:border-primary-800 rounded-lg">
                    <span className="text-lg font-bold text-primary-600 dark:text-primary-400 min-w-[2rem] text-center block">{quantity}</span>
                  </div>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-neutral-100 disabled:hover:to-neutral-200 dark:disabled:hover:from-neutral-800 dark:disabled:hover:to-neutral-700"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`relative w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden group ${
                  isOutOfStock
                    ? 'bg-gradient-to-r from-neutral-400 to-neutral-500 text-neutral-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 text-white hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {!isOutOfStock && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                  <span>
                    {isOutOfStock ? 'Out of Stock' : `Add to Cart • $${(product.price * quantity).toFixed(2)}`}
                  </span>
                </div>
              </button>
              
              {!isOutOfStock && (
                <div className="text-center">
                  <span className="text-neutral-600 dark:text-neutral-400 text-xs">
                    ✨ Free shipping on orders over $50
                  </span>
                </div>
              )}
            </div>

            {/* Additional Product Details */}
            {(product.material || product.capacity || product.pieces || product.dishwasher_safe !== undefined || product.features) && (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-coral to-accent-mint rounded-xl opacity-10 group-hover:opacity-15 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200/50 dark:border-neutral-800/50 shadow-md shadow-neutral-500/5">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent-coral to-accent-mint rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Specifications</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.material && (
                      <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-primary-50 to-primary-100/50 dark:from-primary-950/20 dark:to-primary-900/20 rounded-lg border border-primary-200/50 dark:border-primary-800/50">
                        <div className="w-5 h-5 bg-primary-500 rounded-md flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-primary-600 dark:text-primary-400">Material</div>
                          <div className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm">{product.material}</div>
                        </div>
                      </div>
                    )}
                    
                    {product.capacity && (
                      <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-secondary-50 to-secondary-100/50 dark:from-secondary-950/20 dark:to-secondary-900/20 rounded-lg border border-secondary-200/50 dark:border-secondary-800/50">
                        <div className="w-5 h-5 bg-secondary-500 rounded-md flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-secondary-600 dark:text-secondary-400">Capacity</div>
                          <div className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm">{product.capacity}</div>
                        </div>
                      </div>
                    )}
                    
                    {product.pieces && (
                      <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-accent-coral/10 to-accent-coral/20 dark:from-accent-coral/5 dark:to-accent-coral/10 rounded-lg border border-accent-coral/20 dark:border-accent-coral/10">
                        <div className="w-5 h-5 bg-accent-coral rounded-md flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-accent-coral">Set Includes</div>
                          <div className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm">{product.pieces} pieces</div>
                        </div>
                      </div>
                    )}
                    
                    {product.dishwasher_safe !== undefined && (
                      <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-accent-mint/10 to-accent-mint/20 dark:from-accent-mint/5 dark:to-accent-mint/10 rounded-lg border border-accent-mint/20 dark:border-accent-mint/10">
                        <div className="w-5 h-5 bg-accent-mint rounded-md flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-accent-mint">Dishwasher Safe</div>
                          <div className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm">{product.dishwasher_safe ? 'Yes' : 'No'}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {product.features && (
                    <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                      <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-gradient-to-r from-neutral-50 to-neutral-100/50 dark:from-neutral-800/50 dark:to-neutral-700/50 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex-shrink-0"></div>
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
