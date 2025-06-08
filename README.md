# Furniture Shop

A modern furniture e-commerce website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean and responsive design using Tailwind CSS and Radix UI components
- **Product Catalog**: Browse furniture products with detailed information
- **Blog Section**: Read and explore furniture-related blog posts
- **Dark Mode Support**: Toggle between light and dark themes
- **Mobile Responsive**: Optimized for various screen sizes
- **Newsletter Subscription**: Stay updated with latest furniture trends

## Tech Stack

- **Frontend Framework**: React 19.0.0
- **Type System**: TypeScript 5.7.2
- **Routing**: React Router DOM 7.5.0
- **Styling**: Tailwind CSS 4.1.3
- **UI Components**: 
  - Radix UI (Accordion, Dialog, Navigation)
  - Embla Carousel
- **Form Handling**: React Hook Form 7.56.3
- **Validation**: Zod 3.24.4
- **Development**: Vite 6.2.0

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/snlt11/furniture

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```plaintext
src/
├── assets/          # Static assets
├── components/      # Reusable components
│   ├── Blogs/      # Blog-related components
│   ├── Products/   # Product-related components
│   ├── layouts/    # Layout components
│   └── ui/         # UI components
├── config/         # Configuration files
├── data/           # Mock data and images
├── lib/            # Utility functions
├── pages/          # Page components
└── types/          # TypeScript type definitions
```

## Features

### Product Showcase
- Auto-playing carousel for featured products
- Product filtering by categories
- Detailed product views

### Blog Platform
- Article listing with thumbnails
- Detailed blog post views
- Rich text content rendering

### Navigation
- Responsive navigation menu
- Mobile-friendly drawer navigation
- Breadcrumb navigation

### Theme
- Light/Dark mode toggle
- Persistent theme preference

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.