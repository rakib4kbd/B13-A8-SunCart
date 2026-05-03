# Suncart

## Project Overview

**Suncart** is an online e-commerce platform built with Next.js, designed for browsing and purchasing sun care and summer protection products. It provides a seamless shopping experience with user authentication, product categorization, shopping cart functionality, and profile management.

### Purpose

To offer customers a convenient way to shop for essential sun protection items like sunscreen, skincare products, and accessories, ensuring they stay safe and stylish during sunny seasons.

### Live URL

Deployed at [https://b13-a8-sun-cart-sand.vercel.app/](https://b13-a8-sun-cart-sand.vercel.app/).

## Key Features

- **User Authentication**: Secure login and registration using Better Auth with MongoDB adapter.
- **Product Browsing**: Explore products by categories
- **Product Details**: View detailed information, ratings, and stock for each product.
- **Shopping Cart**: Add, remove, and manage items in the cart with context-based state management.
- **Profile Management**: View and edit user profiles.
- **Responsive Design**: Built with Tailwind CSS and DaisyUI for a modern, mobile-friendly interface.
- **Animations**: Smooth animations using Animate.css and React Fast Marquee for dynamic elements.
- **Image Carousels**: Interactive sliders powered by Swiper for hero banners and product showcases.

## Tech Stack

### Frontend

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: UI library for building interactive components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Component library built on Tailwind CSS.
- **Lucide React**: Icon library for consistent UI elements.

### Backend & Database

- **Better Auth**: Authentication library with MongoDB adapter for secure user management.
- **MongoDB**: NoSQL database for storing user data, products, and sessions.

### Additional Libraries

- **Animate.css**: CSS animations for enhanced user experience.
- **React Fast Marquee**: For scrolling marquee effects.
- **React Hook Form**: Form handling with validation.
- **React Hot Toast**: Toast notifications for user feedback.
- **Swiper**: Touch-enabled sliders and carousels.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rakib4kbd/B13-A8-SunCart.git
   cd B13-A8-SunCart
   ```

2. **Install dependencies**:
   Since this project uses pnpm, run:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add necessary variables (e.g., MongoDB connection string, auth secrets).

4. **Set up MongoDB**:
   Ensure MongoDB is running.

5. **Run the development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is private and not licensed for public use.
