# Nice Gadgets Store
A responsive, full-featured e-commerce web application for browsing and purchasing mobile phones, tablets, and accessories. Built with modern React and TypeScript, it features a custom cart system, persistent local storage, and fast client-side routing.

## Live Preview

Experience the live website: [Nice Gadgets Store Demo](https://nyarachun.github.io/Phone-catalog/)

## Design Reference

[Figma Design](https://www.figma.com/design/FRxncC4lfyhs6og1L6FGEU/Phone-catalog--V2--Rounded-Style-2?node-id=0-1&p=f)

## Technologies Used

**Core**
* **React** (v18.3.1) – UI framework
* **TypeScript** (v5.2.2) – Type safety
* **SCSS / Sass** (v1.77.8) – Styling

**State Management**
* **React Context API** – Application state (Cart & Favorites)
* **Local Storage API** – State persistence

**UI/UX**
* **React Router DOM** (v6.25.1) – Navigation & URL parameter syncing
* **Classnames** (v2.5.1) – Conditional CSS class rendering

**Development & Deployment**
* **Vite** (v5.3.1) – Next-generation build tool
* **ESLint** (v8.57.0) & **Prettier** (v3.3.2) – Code quality and formatting

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```


3. Run the project locally:
```bash
npm start
# or
yarn start
```

## Features

* **Persistent Cart & Favorites:** Built using the React Context API and synced with `localStorage`, ensuring users never lose their selected items or quantities even after a page reload.
* **Multi-Category Catalog:** A diverse storefront supporting mobile phones, tablets, and various accessories with dynamic routing.
* **Advanced Search & Sorting:** Real-time product filtering by name or color, combined with custom sorting options (Newest, Alphabetically, Cheapest, Most Expensive).
* **Dynamic Pagination & URL Sync:** Customizable items per page (4, 8, 16, or All). All pagination, sorting, and search states are strictly synchronized with URL Search Parameters, allowing users to share exact catalog views via direct links.
* **Detailed Product Pages:** Comprehensive product specs, dynamic breadcrumb navigation, and an auto-generated "You may also like" suggested items carousel based on the current selection.
* **Home Page Showcases:** Engaging hero banner slider, alongside auto-calculated "Brand new models" (sorted by release year) and "Hot prices" (highest absolute discount) product carousels.
* **Fully Responsive Design:** Fluid layouts optimized for all devices with precise CSS breakpoints for mobile (320px - 699px), tablets (768px, 640px - 1199px), and large desktop screens (1200px+).
