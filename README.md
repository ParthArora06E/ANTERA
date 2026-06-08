# Antera Biryani Co. - E-Commerce Platform

Welcome to the official front-end repository for the **Antera Biryani Co.** web application. 
This platform is a premium, high-performance e-commerce frontend built to deliver a luxurious ordering experience for authentic Hyderabadi Dum Biryani.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API (Cart Provider)

## Key Features

- **Premium UI/UX**: Custom-built royal aesthetic with seamless scroll animations and micro-interactions.
- **Dynamic Framer Motion Slideshows**: Highly optimized, cross-fading background carousels.
- **Global Cart System**: Context-based state management for adding items to cart across the entire application with a dynamic slide-out drawer.
- **Fully Responsive**: Flawless experience across mobile, tablet, and desktop viewports.
- **Optimized Assets**: Next.js Image component utilized for layout shifts prevention and modern image compression.

## Getting Started

First, ensure you have Node.js installed, then install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

To create an optimized production build:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

## Architecture Notes

- `src/app/`: Contains the Next.js App Router endpoints and global layouts.
- `src/components/`: Modular, reusable UI components (Hero, BucketBiryani, ExploreMenu, etc.).
- `src/context/`: Contains global state providers, specifically `CartContext` for e-commerce functionality.
- `src/components/ui/`: Contains atomic design elements like standard SectionHeadings and FadeIn animation wrappers.

---
*Developed for Antera Biryani Co. | Celebrate Every Meal.*
