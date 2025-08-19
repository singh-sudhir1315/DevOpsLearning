export const products = [
  // Men's Clothing
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "men",
    subcategory: "shirts",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    rating: 4.5,
    reviews: 128,
    description: "Premium cotton classic t-shirt with a comfortable fit. Perfect for everyday wear.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "men",
    subcategory: "pants",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop"
    ],
    sizes: ["30x32", "32x32", "34x32", "36x32"],
    colors: ["Blue", "Black", "Gray"],
    rating: 4.3,
    reviews: 89,
    description: "Modern slim fit jeans with stretch denim for maximum comfort and style.",
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Casual Blazer",
    category: "men",
    subcategory: "jackets",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1593030761757-71cae45d48e7?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593030761757-71cae45d48e7?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Gray", "Black"],
    rating: 4.7,
    reviews: 156,
    description: "Versatile casual blazer perfect for both office and evening wear.",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Hooded Sweatshirt",
    category: "men",
    subcategory: "hoodies",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy"],
    rating: 4.4,
    reviews: 203,
    description: "Comfortable and warm hooded sweatshirt perfect for casual outings.",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Formal Dress Shirt",
    category: "men",
    subcategory: "shirts",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&h=500&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"],
    rating: 4.6,
    reviews: 94,
    description: "Professional dress shirt with wrinkle-resistant fabric for the modern workplace.",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Leather Jacket",
    category: "men",
    subcategory: "jackets",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    rating: 4.8,
    reviews: 67,
    description: "Premium leather jacket with classic styling and durable construction.",
    inStock: true,
    featured: true
  },

  // Women's Clothing
  {
    id: 7,
    name: "Floral Summer Dress",
    category: "women",
    subcategory: "dresses",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue Floral", "Pink Floral", "White Floral"],
    rating: 4.6,
    reviews: 234,
    description: "Beautiful floral summer dress perfect for warm weather and special occasions.",
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "High-Waist Jeans",
    category: "women",
    subcategory: "pants",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop"
    ],
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Blue", "Black", "White"],
    rating: 4.4,
    reviews: 187,
    description: "Stylish high-waist jeans with a flattering fit and stretch denim.",
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Silk Blouse",
    category: "women",
    subcategory: "shirts",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1564257631407-3deb25a6658b?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564257631407-3deb25a6658b?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Pink", "Blue"],
    rating: 4.7,
    reviews: 156,
    description: "Elegant silk blouse with a sophisticated design perfect for professional settings.",
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: "Knit Sweater",
    category: "women",
    subcategory: "sweaters",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Gray", "Pink", "Navy"],
    rating: 4.5,
    reviews: 203,
    description: "Soft knit sweater with a comfortable fit and timeless design.",
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "Denim Jacket",
    category: "women",
    subcategory: "jackets",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    rating: 4.3,
    reviews: 178,
    description: "Classic denim jacket with a modern fit and versatile styling options.",
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Evening Gown",
    category: "women",
    subcategory: "dresses",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Red", "Navy"],
    rating: 4.8,
    reviews: 89,
    description: "Stunning evening gown perfect for formal events and special occasions.",
    inStock: true,
    featured: true
  }
];

export const categories = [
  {
    id: "men",
    name: "Men's Clothing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    subcategories: ["shirts", "pants", "jackets", "hoodies"]
  },
  {
    id: "women", 
    name: "Women's Clothing",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop",
    subcategories: ["dresses", "shirts", "pants", "sweaters", "jackets"]
  }
];

export const subcategories = {
  men: {
    shirts: "Shirts",
    pants: "Pants",
    jackets: "Jackets", 
    hoodies: "Hoodies"
  },
  women: {
    dresses: "Dresses",
    shirts: "Shirts",
    pants: "Pants",
    sweaters: "Sweaters",
    jackets: "Jackets"
  }
};
