import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { products, subcategories } from '../data/products';
import { useFilter } from '../contexts/FilterContext';
import { motion } from 'framer-motion';

const Products = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { filters, updateFilters } = useFilter();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Get search query from URL
  const searchQuery = searchParams.get('search') || '';

  // Filter products based on category, search, and filters
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by subcategory
    if (filters.subcategory) {
      filtered = filtered.filter(product => product.subcategory === filters.subcategory);
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Filter by colors
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => filters.colors.includes(color))
      );
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured first, then by rating
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }

    return filtered;
  }, [category, searchQuery, filters]);

  // Get unique colors and sizes for filters
  const availableColors = useMemo(() => {
    const colors = new Set();
    filteredProducts.forEach(product => {
      product.colors.forEach(color => colors.add(color));
    });
    return Array.from(colors);
  }, [filteredProducts]);

  const availableSizes = useMemo(() => {
    const sizes = new Set();
    filteredProducts.forEach(product => {
      product.sizes.forEach(size => sizes.add(size));
    });
    return Array.from(sizes);
  }, [filteredProducts]);

  // Get subcategories for current category
  const categorySubcategories = category ? subcategories[category] || {} : {};

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'colors' || filterType === 'sizes') {
      const currentValues = filters[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      updateFilters({ [filterType]: newValues });
    } else {
      updateFilters({ [filterType]: value });
    }
  };

  const clearAllFilters = () => {
    updateFilters({
      subcategory: '',
      priceRange: [0, 1000],
      colors: [],
      sizes: [],
      sortBy: 'featured'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}'s Clothing` : 'All Products'}
          </h1>
          {searchQuery && (
            <p className="text-gray-600">
              Search results for: <span className="font-semibold">"{searchQuery}"</span>
            </p>
          )}
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg"
              >
                <span className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filters
                </span>
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
                {/* Subcategory Filter */}
                {Object.keys(categorySubcategories).length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                    <div className="space-y-2">
                      {Object.entries(categorySubcategories).map(([key, value]) => (
                        <label key={key} className="flex items-center">
                          <input
                            type="radio"
                            name="subcategory"
                            value={key}
                            checked={filters.subcategory === key}
                            onChange={(e) => handleFilterChange('subcategory', e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">{value}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">${filters.priceRange[0]}</span>
                      <span className="text-sm text-gray-600">${filters.priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={filters.priceRange[1]}
                      onChange={(e) => updateFilters({ priceRange: [0, parseInt(e.target.value)] })}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Colors */}
                {availableColors.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Colors</h3>
                    <div className="space-y-2">
                      {availableColors.map(color => (
                        <label key={color} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.colors.includes(color)}
                            onChange={() => handleFilterChange('colors', color)}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {availableSizes.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Sizes</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSizes.map(size => (
                        <label key={size} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.sizes.includes(size)}
                            onChange={() => handleFilterChange('sizes', size)}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clear Filters */}
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilters({ sortBy: e.target.value })}
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={viewMode === 'list' ? 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden' : 'group'}
                  >
                    <div className={viewMode === 'list' ? 'flex' : 'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300'}>
                      <div className={viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'relative aspect-square overflow-hidden'}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.originalPrice > product.price && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </div>
                        )}
                      </div>
                      <div className={viewMode === 'list' ? 'flex-1 p-4' : 'p-4'}>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-1">
                            <Star size={16} className="text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{product.rating}</span>
                            <span className="text-sm text-gray-400">({product.reviews})</span>
                          </div>
                          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-lg text-gray-900">${product.price}</span>
                            {product.originalPrice > product.price && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                          <button className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200">
                            <ShoppingBag size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <ShoppingBag size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
