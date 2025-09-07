import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const featuredProducts = productsData.slice(0, 3);
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/20 dark:from-neutral-950 dark:via-primary-950/30 dark:to-secondary-950/20 transition-all duration-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sakura petals for light mode */}
          {!isDarkMode && [...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-peace-sakura rounded-full opacity-30 sakura-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
          {/* War embers for dark mode */}
          {isDarkMode && [...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-war-fire rounded-full opacity-40 war-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-anime">
              <span className="block bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">PEACE & WAR</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-japanese text-neutral-600 dark:text-neutral-400 mt-2 sm:mt-4 block">
                平和と戦争
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed px-4">
              Where tranquility meets intensity. Discover anime merchandise that embodies both serenity and strength.
            </p>
            
            <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap pt-4 px-4">
              <Link 
                to="/products" 
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl sm:rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary-500/25 text-sm sm:text-base"
              >
                Explore Collection
              </Link>
              <Link 
                to="/products?category=t-shirts" 
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-xl sm:rounded-2xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-300 text-sm sm:text-base"
              >
                View Featured
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-3xl mx-auto mt-12 sm:mt-16 px-4">
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">500+</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base">Happy Customers</div>
              </div>
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">50+</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base">Unique Products</div>
              </div>
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-coral to-accent-mint bg-clip-text text-transparent">24/7</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-neutral-100 to-neutral-200/50 dark:from-neutral-800 dark:to-neutral-700/50 rounded-full border border-neutral-300/50 dark:border-neutral-600/50">
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Discover Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">Shop by Category</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed px-4">
              Dive into our meticulously crafted collections where every piece tells a story of passion and artistry
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto px-4">
            {/* T-Shirts Category */}
            <Link 
              to="/products?category=t-shirts" 
              className="relative bg-gradient-to-br from-white via-white to-primary-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-950/30 p-12 rounded-[2rem] text-center group hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800/50 hover:-translate-y-3 overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/5 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-60 group-hover:animate-bounce"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-40 group-hover:animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-primary-500/25">
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22V16H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V16H2V14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M5,9V20H19V9A5,5 0 0,0 14,4H10A5,5 0 0,0 5,9Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">T-Shirts</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">Premium anime-inspired apparel crafted with love</p>
                <div className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore Collection</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Accessories Category */}
            <Link 
              to="/products?category=accessories" 
              className="relative bg-gradient-to-br from-white via-white to-secondary-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-secondary-950/30 p-12 rounded-[2rem] text-center group hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800/50 hover:-translate-y-3 overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/0 via-secondary-500/5 to-secondary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
              
              {/* Floating particles */}
              <div className="absolute top-6 left-4 w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-50 group-hover:animate-ping"></div>
              <div className="absolute bottom-4 right-8 w-2 h-2 bg-primary-400 rounded-full opacity-30 group-hover:animate-bounce"></div>
              
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-xl shadow-secondary-500/25">
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H9V3H15V9H21M7,10A2,2 0 0,0 5,12A2,2 0 0,0 7,14A2,2 0 0,0 9,12A2,2 0 0,0 7,10M17,10A2,2 0 0,0 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10M7,15C5.67,15 3,15.67 3,17V20H11V17C11,15.67 8.33,15 7,15M17,15C15.67,15 13,15.67 13,17V20H21V17C21,15.67 18.33,15 17,15Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">Accessories</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">Unique collectibles and premium gear</p>
                <div className="inline-flex items-center text-secondary-600 dark:text-secondary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore Collection</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Cups Category */}
            <Link 
              to="/products?category=cups" 
              className="relative bg-gradient-to-br from-white via-white to-accent-coral/10 dark:from-neutral-900 dark:via-neutral-900 dark:to-accent-coral/5 p-12 rounded-[2rem] text-center group hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800/50 hover:-translate-y-3 overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/0 via-accent-coral/5 to-accent-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
              
              {/* Floating particles */}
              <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-accent-mint rounded-full opacity-60 group-hover:animate-pulse"></div>
              <div className="absolute bottom-8 left-4 w-2 h-2 bg-accent-coral rounded-full opacity-40 group-hover:animate-bounce"></div>
              
              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-accent-coral via-accent-coral to-accent-mint rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-accent-coral/25">
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-accent-coral transition-colors">Cups & Mugs</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">Perfect companions for your favorite drinks</p>
                <div className="inline-flex items-center text-accent-coral font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore Collection</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-transparent to-neutral-100/50 dark:to-neutral-900/50">
        <div className="container mx-auto px-8 md:px-12">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Featured Products</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Handpicked favorites from our premium collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center space-x-3 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-secondary-500/25"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-neutral-50/50 via-transparent to-primary-50/30 dark:from-neutral-950/50 dark:via-transparent dark:to-primary-950/30">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 dark:from-primary-800/10 dark:to-secondary-800/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-200/20 to-accent-coral/20 dark:from-secondary-800/10 dark:to-accent-coral/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-neutral-100 to-neutral-200/50 dark:from-neutral-800 dark:to-neutral-700/50 rounded-full border border-neutral-300/50 dark:border-neutral-600/50">
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
              <span className="bg-gradient-to-r from-neutral-800 via-primary-600 to-neutral-800 dark:from-neutral-200 dark:via-primary-400 dark:to-neutral-200 bg-clip-text text-transparent">Premium Experience</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
              We're committed to delivering excellence in every aspect of your shopping journey
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto px-4">
            {/* Free Shipping */}
            <div className="group relative overflow-hidden">
              {/* Modern Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5 group-hover:shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10 transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-6 sm:p-8 md:p-10 text-center">
                {/* Icon with Modern Design */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-indigo-400/30 rounded-full blur-sm"></div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Fast & Free Shipping</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Enjoy complimentary worldwide shipping on all orders over $50. No hidden fees, just pure value.</p>
                
                {/* Modern Badge */}
                <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Global Delivery
                </div>
              </div>
            </div>

            {/* Quality Guarantee */}
            <div className="group relative overflow-hidden">
              {/* Modern Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30 rounded-3xl border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/5 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-500/10 transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-6 sm:p-8 md:p-10 text-center">
                {/* Icon with Modern Design */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400/20 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-teal-400/30 rounded-full blur-sm"></div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Premium Quality</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Every product undergoes rigorous quality checks. We guarantee premium materials and exceptional craftsmanship.</p>
                
                {/* Modern Badge */}
                <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/25 group-hover:shadow-xl group-hover:shadow-emerald-500/40 transition-all duration-300">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certified Quality
                </div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group relative overflow-hidden">
              {/* Modern Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/30 dark:via-amber-950/30 dark:to-yellow-950/30 rounded-3xl border border-orange-200/50 dark:border-orange-800/50 shadow-xl shadow-orange-500/10 dark:shadow-orange-500/5 group-hover:shadow-2xl group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10 transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-6 sm:p-8 md:p-10 text-center">
                {/* Icon with Modern Design */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400/20 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-amber-400/30 rounded-full blur-sm"></div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">24/7 Expert Support</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Our dedicated support team is always ready to assist you. Get help anytime, anywhere with your orders.</p>
                
                {/* Modern Badge */}
                <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-orange-500/25 group-hover:shadow-xl group-hover:shadow-orange-500/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Always Available
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-gradient-to-r from-white/80 to-neutral-50/80 dark:from-neutral-900/80 dark:to-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-neutral-700 dark:text-neutral-300 font-semibold">Trusted by 500+ customers worldwide</span>
              </div>
              <div className="w-px h-8 bg-neutral-300 dark:bg-neutral-600"></div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-neutral-700 dark:text-neutral-300 font-semibold">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
