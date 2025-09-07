# Anime Store 🌸 - E-commerce Website

A beautiful, responsive e-commerce website for anime-inspired products built with React, Vite, and TailwindCSS.

## Features ✨

- **Modern Design**: Clean anime aesthetic with pastel colors and kawaii elements
- **Product Catalog**: Browse T-shirts, accessories, and cups/mugs with filtering and search
- **Shopping Cart**: Persistent cart using localStorage with add/remove/update functionality
- **Checkout System**: Complete order flow with form validation
- **Admin Panel**: Manage products with CRUD operations
- **Responsive Design**: Fully responsive across all devices
- **Local Data Storage**: Products and orders stored in JSON files and localStorage

## Product Categories 🛍️

- **T-Shirts** 👕: Kawaii designs and anime-inspired graphics
- **Accessories** ✨: Hair clips, phone cases, and magical items
- **Cups & Mugs** ☕: Ramen bowls, travel tumblers, and tea cups

## Tech Stack 🚀

- **Frontend**: React 18 with JavaScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom anime theme
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect)
- **Data Storage**: JSON files + localStorage
- **Icons**: Emoji-based design system

## Getting Started 🎯

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd /home/abdelhadi/Desktop/React/Ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with cart counter
│   └── ProductCard.jsx # Product display card
├── pages/              # Main application pages
│   ├── Home.jsx        # Landing page with hero section
│   ├── Products.jsx    # Product catalog with filtering
│   ├── ProductDetail.jsx # Individual product pages
│   ├── Cart.jsx        # Shopping cart management
│   ├── Checkout.jsx    # Order checkout process
│   └── Admin.jsx       # Product management panel
├── hooks/              # Custom React hooks
│   └── useCart.js      # Shopping cart logic
├── data/               # JSON data files
│   └── products.json   # Product catalog
├── utils/              # Utility functions
├── App.jsx             # Main app component with routing
├── main.jsx            # React app entry point
└── index.css           # Global styles and Tailwind imports
```

## Usage Guide 📖

### For Customers

1. **Browse Products**: Visit the home page or products page to explore items
2. **Filter & Search**: Use category filters and search to find specific products
3. **View Details**: Click on any product to see detailed information
4. **Add to Cart**: Select options (size, color, etc.) and add items to cart
5. **Checkout**: Review cart and complete the order form
6. **Persistent Cart**: Your cart items are saved between browser sessions

### For Administrators

1. **Access Admin Panel**: Navigate to `/admin`
2. **Add Products**: Click "Add New Product" and fill in the form
3. **Edit Products**: Click "Edit" on any product in the list
4. **Delete Products**: Click "Delete" to remove products (with confirmation)
5. **Manage Inventory**: Update stock levels and product details

## Data Storage 💾

### Products Data
- **File**: `src/data/products.json`
- **Format**: JSON array with product objects
- **Admin Changes**: Saved to localStorage as `animeStoreProducts`

### Shopping Cart
- **Storage**: localStorage as `animeStoreCart`
- **Persistence**: Survives browser sessions and page refreshes

### Orders
- **Storage**: localStorage as `animeStoreOrders`
- **Format**: Array of order objects with customer and product details

## Customization 🎨

### Theme Colors
Edit `tailwind.config.js` to modify the anime color palette:

```javascript
colors: {
  anime: {
    pink: '#FFB6C1',
    purple: '#DDA0DD',
    blue: '#B0E0E6',
    mint: '#98FB98',
    peach: '#FFDAB9',
    lavender: '#E6E6FA',
  }
}
```

### Adding New Products
Use the admin panel or directly edit `src/data/products.json`:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "category": "t-shirts|accessories|cups",
  "price": 24.99,
  "description": "Product description",
  "stock": 10,
  "sizes": ["S", "M", "L"],
  "colors": ["Pink", "Blue"],
  "image": "/images/product.jpg"
}
```

## Sample Products 🎁

The store comes with 6 sample products:

1. **Kawaii Cat Girl T-Shirt** - Adorable pastel design
2. **Dragon Ball Z Power T-Shirt** - Epic energy aura graphics
3. **Sakura Blossom Hair Clips** - 6-piece cherry blossom set
4. **Anime Eyes Phone Case** - Cute expressions for multiple phones
5. **Ramen Bowl Ceramic Mug** - Authentic Japanese design
6. **Totoro Travel Tumbler** - Insulated forest spirit design

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License 📄

This project is open source and available under the MIT License.

## Support 💬

For questions or issues:
- Check the browser console for errors
- Ensure all dependencies are installed
- Verify Node.js version compatibility
- Clear browser cache and localStorage if needed

---

**Enjoy your kawaii shopping experience! 🌸✨**
