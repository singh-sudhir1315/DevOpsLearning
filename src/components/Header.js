import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Online Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/products/men" 
              className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              Men
            </Link>
            <Link 
              to="/products/women" 
              className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              Women
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              All Products
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200">
              <Heart size={20} />
            </button>

            {/* User Account */}
            <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200">
              <User size={20} />
            </button>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              <Search size={20} />
            </button>
            
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                name="search"
                placeholder="Search for products..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products/men"
                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/products/women"
                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Products
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200">
                  <Heart size={16} className="mr-2" />
                  Wishlist
                </button>
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200">
                  <User size={16} className="mr-2" />
                  Account
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
