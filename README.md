**Full Stack E-Commerce Store + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023**

For a live demo, you can use [Stripe Testing Cards](https://stripe.com/docs/testing).

This repository contains a Full Stack E-Commerce Store + Dashboard & CMS application built with Next.js 13, React, Tailwind CSS, Prisma, MySQL, and other modern technologies.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js version 14.x or higher.

## Admin Setup

**Note: Before setting up the E-Commerce Store, make sure you have the [Admin Dashboard](https://github.com/mrExplorist/store-dash.git) configured and running locally.**

## Getting Started

Follow these steps to set up and run the E-Commerce Store on your local machine.

### Cloning the Repository

Clone this repository to your local machine using the following command:

```shell
git clone https://github.com/mrExplorist/e-store.git
```

### Installing Packages

Navigate to the project directory and install the required npm packages by running:

```shell
npm install
```

### Setting Up Environment Variables

Create a `.env` file in the project directory and configure the following environment variable with the URL of your admin dashboard:

```env
NEXT_PUBLIC_API_URL=
```

### Starting the App

Start the development instance of the app using the following command:

```shell
npm run dev
```

## Key Features

### E-Commerce Store

- **Multi-Vendor Support**:

  - Manage multiple vendors and stores through a single CMS.
  - Generate individualized API routes for each store (e.g., "Shoe store," "Laptop store," "Suit store").

- **Category Management**:

  - Create, update, and delete product categories easily.
  - Organize products for a well-structured online store.

- **Product Management**:

  - Complete control over your product catalog.
  - Create, update, and delete products effortlessly.

- **Image Management**:

  - Upload multiple images for each product.
  - Change product images as needed for visual appeal.

- **Filter Creation**:

  - Create, update, and delete filters (e.g., "Color" and "Size").
  - Match filters in the "Product" creation form for customer convenience.

- **Billboard Management**:

  - Customize the store's appearance with "Billboards" (prominent text sections).
  - Attach billboards to specific categories or use them independently.

- **Search and Pagination**:

  - Search through categories, products, sizes, colors, and billboards.
  - Implement pagination for manageable search results.

- **Featured Products**:

  - Control which products are "featured" on the homepage.
  - Prominently display selected products for increased visibility.

- **Order Management**:

  - Efficient order creation and processing.
  - Track orders and manage order fulfillment.

- **Sales Analytics and Revenue Graphs**:

  - View detailed sales analytics.
  - Visualize revenue trends with interactive graphs.

- **Clerk Authentication**:

  - Secure user registration and sign-in processes.
  - Protect user data with authentication.

- **Order Creation and Payment Processing**:

  - Enable seamless order placement.
  - Implement a secure Stripe checkout process for safe payments.

- **Stripe Webhooks**:

  - Automate payment confirmation, order updates, and subscription management.
  - Ensure real-time synchronization.

- **Database Management**:
  - Utilize MySQL, Prisma, and PlanetScale for efficient data storage and retrieval.

## Customization

The dashboard is highly customizable, allowing you to adapt it to your specific needs. It provides API endpoints that enable you to connect and create tailored functionality. You can customize the dashboard to handle various tasks, manage different types of content, and adapt it to your unique requirements.

## Contributing

If you'd like to contribute to this project, please follow standard open-source contribution guidelines, such as opening issues, submitting pull requests, and adhering to the code of conduct.

---
