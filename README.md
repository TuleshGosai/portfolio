# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases services, work history, education, projects, blog posts, and contact information.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI** - Clean and professional interface built with Tailwind CSS
- **Type-Safe** - Written in TypeScript for better code quality and maintainability
- **Fast Performance** - Built with Vite for lightning-fast development and optimized builds
- **SVG Support** - Integrated SVG support using vite-plugin-svgr

## 📋 Sections

The portfolio includes the following sections:

- **Hero** - Introduction and call-to-action
- **Services** - Service offerings (Web Development, UI Design, Game Development, Photography)
- **Pricing Plans** - Service pricing information
- **Recommendations** - Client testimonials and recommendations
- **Education** - Educational background
- **Work History** - Professional experience timeline
- **Portfolio** - Project showcase and portfolio items
- **Blog** - Latest blog posts
- **Contact** - Contact form and information

## 🛠️ Tech Stack

- **React** - ^19.2.0
- **TypeScript** - ~5.9.3
- **Vite** - ^7.2.4
- **Tailwind CSS** - ^4.1.18
- **vite-plugin-svgr** - ^4.5.0

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── icons/          # SVG icons used throughout the site
│   └── images/         # Image assets (profile, testimonials, blog images)
├── src/
│   ├── components/     # React components
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PricingPlans.tsx
│   │   ├── Recommendations.tsx
│   │   ├── Services.tsx
│   │   ├── Sidebar.tsx
│   │   └── WorkHistory.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint:

```bash
npm run lint
```

## 🎨 Styling

This project uses **Tailwind CSS v4** for styling. Tailwind is configured via the `@tailwindcss/vite` plugin, providing a modern and efficient styling solution.

## 📝 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🗂️ Components Overview

- **Sidebar** - Fixed sidebar navigation
- **Navigation** - Top navigation bar
- **Hero** - Landing section with introduction
- **Services** - Services offered
- **PricingPlans** - Pricing information
- **Recommendations** - Client testimonials
- **Education** - Educational qualifications
- **WorkHistory** - Professional experience
- **Portfolio** - Project showcase
- **Blog** - Blog posts section
- **Contact** - Contact form and details

## 🔧 Configuration

- **TypeScript**: Configured via `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`
- **Vite**: Configured in `vite.config.ts` with React, Tailwind CSS, and SVGR plugins
- **ESLint**: Configured in `eslint.config.js` with React and TypeScript rules

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Author

**Rayan Adlrdard** - Front-end Developer

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
