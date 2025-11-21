# Pranav Gawai - Portfolio

A minimal, dark-themed personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my education, experience, projects, and skills in a clean, responsive interface.

## Features

- 🎨 **Modern Design**: Clean, dark-themed UI with a responsive grid background.
- 📱 **Responsive**: Fully responsive layout that works seamlessly on desktop and mobile devices.
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds.
- 🛠 **Custom Components**: Reusable components for sections, cards, and badges.
- 🎭 **Interactive Elements**: Smooth scrolling, hover effects, and timeline visualizations.

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pranavgawaii/pranav-gawai-portfolio.git
   cd pranav-gawai-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/    # Reusable UI components (Card, Badge, Section)
│   ├── constants.tsx  # Portfolio data (Profile, Experience, Projects)
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles and Tailwind directives
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Customization

You can easily update the portfolio content by modifying the `src/constants.tsx` file. This file contains all the data for:
- Profile information
- Education history
- Work experience
- Projects
- Skills
- Leadership & Certifications

## License

This project is licensed under the MIT License.
