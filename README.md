# Laxmi Mobile Shop - Next.js Website

A modern, production-ready, and fully responsive website for Laxmi Mobile Shop built with Next.js 14, featuring App Router, Tailwind CSS, and optimized SEO.

## Features

- ✨ **Modern UI/UX**: Professional design with attractive color palette (deep blues with gold accents)
- 📱 **100% Responsive**: Fully optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized**: Next.js Image Optimization and Server Components
- 🔍 **SEO Optimized**: Comprehensive meta tags, keywords, and Open Graph support
- 🎨 **Tailwind CSS**: Rapid UI development with utility-first CSS framework
- 🛍️ **Brand Showcase**: Display logos for major mobile and accessory brands
- 📊 **Trust Indicators**: Statistics highlighting experience, quality, and customer satisfaction
- 📍 **Contact Integration**: WhatsApp, Instagram, and Google Maps integration

## Pages

### Home Page (/)
- Hero section with call-to-action
- Trust statistics (25+ years, certified quality, 1000+ customers)
- Mobile brands showcase (iPhone, Samsung, Vivo, Realme, OnePlus, Mi, Nothing)
- Accessories & smartwatch brands (Gizmore, Lyne, Boat, Samsung, Apple Watch)

### About Us Page (/about)
- Owner's story and journey
- Core values section
- Contact options (WhatsApp, Instagram, Google Maps)
- Embedded Google Maps

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3.4+
- **Language**: JavaScript (ES6+)
- **Image Optimization**: next/image component
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Mobile/
├── app/
│   ├── about/
│   │   └── page.js          # About Us page
│   ├── layout.js            # Root layout with navigation & footer
│   ├── page.js              # Home page
│   └── globals.css          # Global styles with Tailwind directives
├── public/                  # Static assets (images, logos)
├── .gitignore
├── next.config.js           # Next.js configuration
├── package.json
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md
```

## Customization

### Update Contact Information

Edit the contact links in:
- `app/layout.js` (Footer)
- `app/about/page.js` (Contact section)

Replace placeholder URLs:
- WhatsApp: `https://wa.me/919876543210` → Your number
- Instagram: `https://instagram.com/laxmimobileshop` → Your handle
- Google Maps: Update the map embed URL with your actual location

### Update Images

Replace the Unsplash placeholder images with your own:
1. Add your images to the `public/` directory
2. Update image paths in the components
3. For external images, add domains to `next.config.js`

### Brand Logos

Update brand logo URLs in:
- `app/page.js` - `mobileBrands` and `accessoryBrands` arrays

## SEO Optimization

The website includes:
- Optimized title and meta description tags
- Open Graph meta tags for social sharing
- Semantic HTML structure
- Alt text for all images
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Server-side rendering with React Server Components
- Automatic image optimization with next/image
- Code splitting and lazy loading
- Optimized fonts with next/font

## License

© 2025 Laxmi Mobile Shop. All rights reserved.

## Support

For any questions or support, contact us through:
- WhatsApp: [Your Number]
- Instagram: @laxmimobileshop
- Visit our store (check Google Maps)
